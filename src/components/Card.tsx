import { motion } from 'framer-motion';
import '../styles/fonts.css';
import '../styles/design-system.css';

interface CardProps {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ content, isFlipped, isMatched, onClick }) => {
  return (
    <motion.div
      className={`card relative w-full aspect-[3/4] cursor-pointer ${isMatched ? 'opacity-0 pointer-events-none' : ''}`}
      onClick={onClick}
      whileHover={!isFlipped ? { scale: 1.05, y: -8, boxShadow: 'var(--card-hover-shadow)' } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className="absolute w-full h-full"
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Card Back */}
        <div
          className="card-back absolute w-full h-full bg-gradient-to-br from-[var(--card-back-gradient-start)] via-[var(--primary-700)] to-[var(--card-back-gradient-end)] rounded-xl flex items-center justify-center transform transition-all duration-300"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <span className="text-4xl font-bold text-[var(--question-mark-color)] select-none opacity-90 drop-shadow-lg">?</span>
        </div>

        {/* Card Front */}
        <div
          className="card-front absolute w-full h-full bg-[var(--card-front-bg)] rounded-xl flex items-center justify-center transform transition-all duration-300"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <span className="text-4xl font-semibold text-[var(--card-text-color)] select-none">{content}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;