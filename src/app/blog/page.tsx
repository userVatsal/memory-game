'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'The Science Behind Memory Training',
    excerpt: 'Discover how memory games strengthen neural connections and enhance cognitive performance through neuroplasticity.',
    readTime: '5 min read',
    category: 'Science',
    content: `Memory training isn't just about playing games – it's about rewiring your brain. Through neuroplasticity, 
    your brain forms new neural pathways when you engage in memory exercises. Regular practice with memory games 
    has been shown to improve working memory capacity, attention span, and processing speed. Studies indicate that 
    individuals who engage in regular memory training show increased activity in the prefrontal cortex and hippocampus, 
    regions crucial for memory formation and recall.`
  },
  {
    id: 2,
    title: 'Memory Games for Academic Success',
    excerpt: 'Learn how memory training can boost study efficiency and academic performance.',
    readTime: '4 min read',
    category: 'Education',
    content: `For students, strong memory skills are essential for academic success. Memory games help develop 
    techniques for efficient information retention and recall. Whether you're preparing for exams or learning 
    new subjects, memory training can enhance your study sessions by improving focus and reducing learning time. 
    Regular practice with memory games has been linked to better test scores and increased confidence in academic settings.`
  },
  {
    id: 3,
    title: 'Memory Training for Professional Development',
    excerpt: 'Explore how memory enhancement can advance your career and workplace productivity.',
    readTime: '6 min read',
    category: 'Career',
    content: `In today's fast-paced professional world, a sharp memory is a valuable asset. Memory training can help 
    you remember important details from meetings, master new skills quickly, and maintain focus during crucial tasks. 
    Professionals who incorporate memory exercises into their daily routine report improved multitasking abilities, 
    better client relationships, and enhanced problem-solving skills. Memory games provide a fun and effective way to 
    build these essential cognitive skills.`
  }
];

export default function BlogPage() {
  return (
    <Layout
      title="BrainBoost Blog - Memory Training Insights and Tips"
      description="Explore the latest research and insights about memory training, cognitive enhancement, and brain health."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Memory Training Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and research about memory enhancement and cognitive training
          </p>
        </motion.div>

        <div className="grid gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <div className="mb-4">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500 ml-4">{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="prose prose-lg text-gray-600 mb-6">
                {article.content}
              </div>
              <div className="flex justify-end">
                <Link
                  href={`/blog/${article.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
}