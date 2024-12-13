import React from 'react';
import { User, UserPlus, UserMinus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFriends } from '../../hooks/useFriends';

export default function FriendsList() {
  const { friends, removeFriend } = useFriends();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Friends</h2>
      <div className="space-y-3">
        {friends.map((friend) => (
          <motion.div
            key={friend.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <img
                src={friend.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.id}`}
                alt={friend.fullName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{friend.fullName}</p>
                <p className="text-sm text-gray-500">@{friend.username}</p>
              </div>
            </div>
            <button
              onClick={() => removeFriend(friend.id)}
              className="text-red-500 hover:text-red-600"
            >
              <UserMinus size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}