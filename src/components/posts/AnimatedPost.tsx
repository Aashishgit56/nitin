import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Post } from '../../types';

interface AnimatedPostProps {
  post: Post;
}

export default function AnimatedPost({ post }: AnimatedPostProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transform-gpu"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-4 border-b border-gray-100"
      >
        <div className="flex items-center space-x-3">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.userId}`}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">@{post.userId}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </motion.div>

      {post.content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4"
        >
          <p className="text-gray-800">{post.content}</p>
        </motion.div>
      )}

      {post.image && (
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={post.image}
          alt="Post content"
          className="w-full"
        />
      )}

      <motion.div
        whileHover={{ y: -2 }}
        className="p-4 flex items-center space-x-4"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-gray-600 hover:text-red-500"
        >
          <Heart className="h-6 w-6" />
          <span>{post.likes.length}</span>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
        >
          <MessageCircle className="h-6 w-6" />
          <span>{post.comments.length}</span>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-gray-600 hover:text-green-500"
        >
          <Share2 className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}