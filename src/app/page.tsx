'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const howToPlayRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const howToPlayInView = useInView(howToPlayRef, { once: true });

  return (
    <Layout>
      <div className="relative overflow-x-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          initial="initial"
          animate="animate"
         >
          {[...Array(8)].map((_, i) => {
            // Use deterministic initial positions in a grid layout
            const row = Math.floor(i / 4);
            const col = i % 4;
            const initialX = (col * 25) + 10; // Percentage-based positioning
            const initialY = (row * 25) + 10;
            
            return (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-2xl"
                initial={{
                  x: `${initialX}%`,
                  y: `${initialY}%`,
                }}
                animate={{
                  x: [`${initialX}%`, `${initialX + 10}%`, `${initialX}%`],
                  y: [`${initialY}%`, `${initialY + 10}%`, `${initialY}%`],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            );
          })}
          ))}
        </motion.div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 max-w-6xl mx-auto"
          >
            <motion.h1
              className="text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              BrainBoost
            </motion.h1>
            <motion.p
              className="text-3xl text-gray-600 mb-16 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Challenge your memory. Train your mind.
            </motion.p>
            <div className="flex gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/play"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all inline-block"
                >
                  Play Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/auth/signup"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all inline-block"
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-24 bg-white/80 backdrop-blur-sm relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-blue-600">Game Features</h2>
              <p className="text-xl text-gray-600">Discover what makes BrainBoost special</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎮',
                  title: 'Multiple Themes',
                  description: 'Choose from various card themes to keep the game fresh and engaging'
                },
                {
                  icon: '🏆',
                  title: 'Progress Tracking',
                  description: 'Monitor your improvement with detailed statistics and achievements'
                },
                {
                  icon: '🎯',
                  title: 'Difficulty Levels',
                  description: 'Challenge yourself with increasing levels of difficulty'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section ref={howToPlayRef} className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={howToPlayInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-purple-600">How to Play</h2>
              <p className="text-xl text-gray-600">Get started in three simple steps</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Choose Your Level',
                  description: 'Select from easy, medium, or hard difficulty'
                },
                {
                  step: '2',
                  title: 'Match Cards',
                  description: 'Find pairs of matching cards before time runs out'
                },
                {
                  step: '3',
                  title: 'Score Points',
                  description: 'Earn points for matches and compete for high scores'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={howToPlayInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-24 bg-white/80 backdrop-blur-sm relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-blue-600">About Us</h2>
              <p className="text-xl text-gray-600">Our mission is to make brain training fun and accessible</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg mx-auto text-center"
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                At BrainBoost, we believe that cognitive training should be both effective and enjoyable.
                Our memory game is designed to help you improve your memory, focus, and mental agility
                while having fun. Whether you're a student looking to enhance your study skills or
                someone who wants to keep their mind sharp, BrainBoost is here to help you achieve
                your goals.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12 text-left">
                <div className="bg-white/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Latest from Our Blog</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                        The Science Behind Memory Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Memory Games for Academic Success
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Memory Training for Professional Development
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Why Choose BrainBoost?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Scientifically-backed memory training exercises</li>
                    <li>• Adaptive difficulty levels for optimal learning</li>
                    <li>• Track progress with detailed performance metrics</li>
                    <li>• Engaging gameplay for sustained motivation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 flex justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More About Us →
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/blog"
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read Our Blog →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
