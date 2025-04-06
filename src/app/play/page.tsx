'use client';

import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

// Dynamically import the MemoryGame component to avoid SSR issues with animations
const MemoryGame = dynamic(() => import('@/components/MemoryGame'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="text-6xl"
      >
        🧠
      </motion.div>
    </div>
  ),
});

export default function PlayPage() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <MemoryGame />
      </motion.div>
    </Layout>
  );
}