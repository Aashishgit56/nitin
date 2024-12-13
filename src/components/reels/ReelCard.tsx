import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Reel } from '../../types';

interface ReelCardProps {
  reel: Reel;
}

export default function ReelCard({ reel }: ReelCardProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div
      style={{ scale }}
      className="relative bg-black rounded-lg overflow-hidden h-[600px] snap-center"
    >
      <video
        src={reel.videoUrl}
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={reel.user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${reel.user.id}`}
            alt={reel.user.username}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div className="text-white">
            <p className="font-semibold">{reel.user.username}</p>
            <p className="text-sm opacity-80">{reel.caption}</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-white flex items-center space-x-1">
            <Heart className="h-6 w-6" />
            <span>{reel.likes}</span>
          </button>
          <button className="text-white flex items-center space-x-1">
            <MessageCircle className="h-6 w-6" />
            <span>{reel.comments}</span>
          </button>
          <button className="text-white">
            <Share2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}