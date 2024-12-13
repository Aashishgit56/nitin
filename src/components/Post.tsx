import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img
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
      </div>

      {post.content && (
        <div className="p-4">
          <p className="text-gray-800">{post.content}</p>
        </div>
      )}

      {post.image && (
        <img src={post.image} alt="Post content" className="w-full" />
      )}

      <div className="p-4 flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
          <Heart className="h-6 w-6" />
          <span>{post.likes.length}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
          <MessageCircle className="h-6 w-6" />
          <span>{post.comments.length}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500">
          <Share2 className="h-6 w-6" />
        </button>
      </div>

      {post.comments.length > 0 && (
        <div className="p-4 border-t border-gray-100">
          {post.comments.map((comment) => (
            <div key={comment.id} className="mb-2">
              <div className="flex items-center space-x-2">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.userId}`}
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
                <p className="font-semibold text-sm">@{comment.userId}</p>
              </div>
              <p className="text-gray-800 ml-8">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}