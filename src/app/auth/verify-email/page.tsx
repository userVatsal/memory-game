'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function VerifyEmail() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
        >
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Check your email
            </h2>
            <div className="mt-8 text-gray-600">
              <p className="mb-4">
                We've sent you an email with a verification link. Please click the link to verify your account.
              </p>
              <p>
                Once verified, you'll be able to sign in and start playing!
              </p>
            </div>
            <div className="mt-12">
              <div className="text-4xl mb-4">📧</div>
              <p className="text-sm text-gray-500">
                Don't see the email? Check your spam folder or try signing up again.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}