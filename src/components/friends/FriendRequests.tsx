import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFriendRequests } from '../../hooks/useFriendRequests';

export default function FriendRequests() {
  const { requests, acceptRequest, rejectRequest } = useFriendRequests();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Friend Requests</h2>
      <div className="space-y-3">
        {requests.map((request) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <img
                src={request.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${request.id}`}
                alt={request.fullName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{request.fullName}</p>
                <p className="text-sm text-gray-500">@{request.username}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => acceptRequest(request.id)}
                className="p-2 text-green-500 hover:bg-green-50 rounded-full"
              >
                <Check size={20} />
              </button>
              <button
                onClick={() => rejectRequest(request.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}