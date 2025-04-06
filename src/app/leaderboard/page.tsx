'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

interface LeaderboardEntry {
  rank: number;
  player: string;
  score: number;
  time: number;
}

// Temporary mock data - replace with actual data from backend
const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, player: 'BrainMaster', score: 100, time: 45 },
  { rank: 2, player: 'MemoryPro', score: 95, time: 50 },
  { rank: 3, player: 'CognitivePro', score: 90, time: 55 },
  { rank: 4, player: 'MindChamp', score: 85, time: 60 },
  { rank: 5, player: 'BrainGenius', score: 80, time: 65 },
];

export default function LeaderboardPage() {
  const pageTitle = "Global Leaderboard - BrainBoost Memory Game";
  const pageDescription = "View the top performers in BrainBoost Memory Game. Compare scores, track rankings, and compete with players worldwide to reach the top of our global leaderboard.";

  return (
    <Layout
      title={pageTitle}
      description={pageDescription}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Global Leaderboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compete with players worldwide and claim your spot at the top!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Rank</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Player</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Time (s)</th>
                </tr>
              </thead>
              <tbody>
                {mockLeaderboard.map((entry, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {entry.rank === 1 && '🥇'}
                        {entry.rank === 2 && '🥈'}
                        {entry.rank === 3 && '🥉'}
                        <span className={`ml-2 font-semibold ${entry.rank <= 3 ? 'text-blue-600' : ''}`}>
                          #{entry.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">{entry.player}</td>
                    <td className="px-6 py-4 text-blue-600 font-semibold">{entry.score}</td>
                    <td className="px-6 py-4 text-gray-600">{entry.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Think you can make it to the top? Start playing now and show off your memory skills!
          </p>
          <a
            href="/play"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Play Now
          </a>
        </motion.div>
      </div>
    </Layout>
  );
}