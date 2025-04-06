'use client';

import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center z-50">
      <div className="relative">
        {/* Rotating brain emoji */}
        <motion.div
          className="text-6xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          🧠
        </motion.div>

        {/* Pulsing circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-4 border-blue-500/30"
            initial={{ scale: 0.1, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeOut'
            }}
          />
        ))}

        {/* Loading text */}
        <motion.p
          className="absolute top-full mt-8 text-xl font-semibold text-blue-600 left-1/2 -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading your brain training...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingAnimation;