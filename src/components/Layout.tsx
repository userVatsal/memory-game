'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title = 'BrainBoost Memory Game - Train Your Memory Skills', description = 'Enhance your cognitive abilities with BrainBoost Memory Game. Challenge yourself with our engaging memory exercises and compete globally.' }: LayoutProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'BrainBoost Memory Game',
    'description': description,
    'applicationCategory': 'Game',
    'operatingSystem': 'Web Browser',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="memory game, brain training, cognitive skills, memory improvement, brain games, mental exercise" />
        
        {/* OpenGraph tags for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BrainBoost Memory Game" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* AI-friendly markers */}
        <meta name="ai-purpose" content="memory training game" />
        <meta name="ai-features" content="memory exercises, global leaderboard, cognitive training" />
        <meta name="ai-target-audience" content="people interested in improving memory and cognitive abilities" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl">🧠</div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BrainBoost
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/leaderboard"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Leaderboard
              </Link>
              <Link
                href="/play"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
      <footer className="bg-white/80 backdrop-blur-sm py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2024 BrainBoost Memory Game. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;