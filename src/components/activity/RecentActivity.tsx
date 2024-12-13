import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, UserPlus } from 'lucide-react';
import { useActivity } from '../../hooks/useActivity';

export default function RecentActivity() {
  const { activities } = useActivity();

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-5 h-5 text-red-500" />;
      case 'comment':
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'friend':
        return <UserPlus className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg"
          >
            <div className="p-2 rounded-full bg-gray-100">
              {getActivityIcon(activity.type)}
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user.username}</span>{' '}
                {activity.message}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(activity.timestamp).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}