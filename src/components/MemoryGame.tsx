import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';

interface GameState {
  cards: { id: number; content: string; isFlipped: boolean; isMatched: boolean }[];
  score: number;
  bestScore: number;
  timeRemaining: number;
  gameStarted: boolean;
  gameCompleted: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  theme: 'emoji' | 'animals' | 'sports' | 'food';
}

const CARD_THEMES = {
  emoji: ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎸', '🎼', '🎹', '🎺', '🎻', '🎬', '🎪', '🎭', '🎨', '🎯', '🎲', '🎮', '🎸', '🎼', '🎹', '🎺', '🎻', '🎬', '🎪', '🎭', '🎨', '🎯', '🎲', '🎮', '🎸', '🎼'],
  animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🦒', '🦘', '🦔', '🦦', '🦥', '🦨', '🦡', '🦃', '🦚', '🦜', '🦢', '🦩', '🐸', '🐢', '🦎', '🐊', '🐋', '🐳', '🦈', '🐠'],
  sports: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '⛳', '🏊', '🏋️', '🤸', '🤼', '🤽', '🤾', '🤺', '🏇', '🏂', '🪂', '🏄', '🚴', '🎳', '🎯', '🎲', '🎰', '🎨', '🎭', '🎪', '🎢', '🎡'],
  food: ['🍎', '🍕', '🍔', '🌮', '🍦', '🍩', '🍪', '🍫', '🍿', '🥨', '🥐', '🧁', '🥝', '🍇', '🍓', '🍒', '🍑', '🥭', '🍍', '🥥', '🥦', '🥑', '🌶️', '🥕', '🍄', '🥜', '🌰', '🥔', '🧀', '🥩', '🦐', '🍣']
};

const DIFFICULTY_SETTINGS = {
  easy: { pairs: 8, timeLimit: 120, gridSize: 4 }, // 4x4 grid (16 cards, 8 pairs)
  medium: { pairs: 18, timeLimit: 180, gridSize: 6 }, // 6x6 grid (36 cards, 18 pairs)
  hard: { pairs: 32, timeLimit: 300, gridSize: 8 } // 8x8 grid (64 cards, 32 pairs)
};

const MemoryGame = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [loading, setLoading] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    score: 0,
    bestScore: 0,
    timeRemaining: 0,
    gameStarted: false,
    gameCompleted: false,
    difficulty: 'medium',
    theme: 'emoji'
  });

  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState.gameStarted && !gameState.gameCompleted) {
      timer = setInterval(() => {
        setGameState(prev => {
          const timeRemaining = prev.timeRemaining - 1;
          if (timeRemaining <= 0) {
            return {
              ...prev,
              timeRemaining: 0,
              gameCompleted: true
            };
          }
          return { ...prev, timeRemaining };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.gameStarted, gameState.gameCompleted]);

  const initializeGame = (difficulty: GameState['difficulty'] = gameState.difficulty, theme: GameState['theme'] = gameState.theme) => {
    setLoading(true);
    // Ensure difficulty is a valid value
    const validDifficulty = difficulty in DIFFICULTY_SETTINGS ? difficulty : 'medium';
    const { pairs, timeLimit } = DIFFICULTY_SETTINGS[validDifficulty];
    const themeEmojis = CARD_THEMES[theme].slice(0, pairs);
    const shuffledCards = [...themeEmojis, ...themeEmojis]
      .sort(() => Math.random() - 0.5)
      .map((content, index) => ({
        id: index,
        content,
        isFlipped: false,
        isMatched: false
      }));

    setGameState(prev => ({
      ...prev,
      cards: shuffledCards,
      score: 0,
      timeRemaining: timeLimit,
      gameStarted: false,
      gameCompleted: false,
      difficulty: validDifficulty,
      theme
    }));
    setShowSettings(false);
    setTimeout(() => setLoading(false), 1500);
    setFlippedCards([]);
  };

  const handleCardClick = (cardId: number) => {
    if (!gameState.gameStarted) {
      setGameState(prev => ({ ...prev, gameStarted: true }));
    }

    const card = gameState.cards[cardId];
    if (card.isMatched || card.isFlipped || flippedCards.length >= 2) return;

    const newCards = [...gameState.cards];
    newCards[cardId].isFlipped = true;
    setGameState(prev => ({ ...prev, cards: newCards }));

    if (flippedCards.length === 1) {
      const firstCardId = flippedCards[0];
      const secondCardId = cardId;

      if (newCards[firstCardId].content === newCards[secondCardId].content) {
        // Match found
        newCards[firstCardId].isMatched = true;
        newCards[secondCardId].isMatched = true;
        setGameState(prev => ({
          ...prev,
          cards: newCards,
          score: prev.score + 10
        }));

        // Check if game is completed
        if (newCards.every(card => card.isMatched)) {
          const newBestScore = Math.max(gameState.score + 10, gameState.bestScore);
          setGameState(prev => ({
            ...prev,
            bestScore: newBestScore,
            gameCompleted: true
          }));
        }
      } else {
        // No match
        setTimeout(() => {
          newCards[firstCardId].isFlipped = false;
          newCards[secondCardId].isFlipped = false;
          setGameState(prev => ({
            ...prev,
            cards: newCards,
            score: Math.max(0, prev.score - 2)
          }));
        }, 1000);
      }
      setFlippedCards([]);
    } else {
      setFlippedCards([cardId]);
    }
  };

  const handleStartGame = (difficulty: GameState['difficulty'], theme: GameState['theme']) => {
    initializeGame(difficulty, theme);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <AnimatePresence mode="wait">
        {loading && <LoadingAnimation />}

        {showSettings && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4"
          >
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Game Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Difficulty</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.keys(DIFFICULTY_SETTINGS).map((level) => (
                      <button
                        key={level}
                        onClick={() => setGameState(prev => ({ ...prev, difficulty: level as GameState['difficulty'] }))}
                        className={`p-3 rounded-lg text-center transition-all ${gameState.difficulty === level ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Theme</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(CARD_THEMES).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setGameState(prev => ({ ...prev, theme: theme as GameState['theme'] }))}
                        className={`p-3 rounded-lg text-center transition-all ${gameState.theme === theme ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                      >
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleStartGame(gameState.difficulty, gameState.theme)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all mt-8"
                >
                  Start Game
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Memory Game</h1>
          <div className="flex justify-center gap-8 mb-4">
            <div className="text-xl text-gray-500">
              Score: <span className="font-bold">{gameState.score}</span>
            </div>
            <div className="text-xl text-gray-500">
              Best Score: <span className="font-bold">{gameState.bestScore}</span>
            </div>
            <div className="text-xl text-gray-500">
              Time: <span className="font-bold">{gameState.timeRemaining}s</span>
            </div>
          </div>
          <button
            onClick={() => initializeGame(gameState.difficulty, gameState.theme)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            New Game
          </button>
        </div>

        <motion.div
          className={`grid gap-4 ${gameState.difficulty === 'easy' ? 'grid-cols-4' : gameState.difficulty === 'medium' ? 'grid-cols-6' : 'grid-cols-8'} max-w-full mx-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {gameState.cards.map((card) => (
            <Card
              key={card.id}
              {...card}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </motion.div>

        {gameState.gameCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mt-8"
          >
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Congratulations! 🎉
            </h2>
            <p className="text-xl">
              {gameState.timeRemaining === 0 
                ? `Time's up! Final score: ${gameState.score}`
                : `You completed the game with ${gameState.timeRemaining} seconds left and a score of ${gameState.score}!`
              }
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;