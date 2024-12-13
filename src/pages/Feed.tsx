import React from 'react';
import AnimatedPost from '../components/posts/AnimatedPost';
import FriendsList from '../components/friends/FriendsList';
import FriendRequests from '../components/friends/FriendRequests';
import RecentActivity from '../components/activity/RecentActivity';

const MOCK_POSTS = [
  {
    id: '1',
    userId: 'john_doe',
    content: 'Just had an amazing day at the beach! 🏖️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    likes: ['user1', 'user2'],
    comments: [
      {
        id: 'c1',
        userId: 'jane_smith',
        content: 'Looks amazing!',
        createdAt: new Date('2024-03-10'),
      },
    ],
    createdAt: new Date('2024-03-10'),
  },
  {
    id: '2',
    userId: 'jane_smith',
    content: 'Trying out this new coffee shop ☕',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    likes: ['user3'],
    comments: [],
    createdAt: new Date('2024-03-09'),
  },
];

export default function Feed() {
  return (
    <div className="container mx-auto pt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-3 space-y-6">
          <FriendsList />
          <FriendRequests />
        </div>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-6">
          {MOCK_POSTS.map((post) => (
            <AnimatedPost key={post.id} post={post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}