'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About BrainBoost
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering minds through engaging memory challenges
          </p>
        </motion.div>

        <div className="grid gap-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At BrainBoost, we believe in the power of cognitive training through engaging gameplay.
              Our mission is to make brain training accessible, enjoyable, and effective for everyone.
              Through our carefully designed memory games, we help users enhance their cognitive abilities
              while having fun.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-purple-600">Benefits of Memory Games</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cognitive Enhancement',
                  description: 'Improve memory, focus, and mental agility through regular practice'
                },
                {
                  title: 'Stress Relief',
                  description: 'Engage in enjoyable mental exercises that help reduce stress and anxiety'
                },
                {
                  title: 'Brain Health',
                  description: 'Support long-term brain health and potentially reduce cognitive decline'
                },
                {
                  title: 'Mental Flexibility',
                  description: 'Develop better problem-solving skills and mental adaptability'
                }
              ].map((benefit, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/50">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">How It Works</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Our memory game uses a scientifically-backed approach to cognitive training. Players match
                pairs of cards while competing against time, challenging both short-term memory and
                quick thinking abilities. The game adapts to your skill level, ensuring you're always
                challenged but never overwhelmed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Regular practice with BrainBoost can help improve pattern recognition, concentration,
                and visual memory. Track your progress over time and compete with others to stay
                motivated on your journey to better cognitive fitness.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}