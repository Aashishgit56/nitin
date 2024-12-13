import { useState } from 'react';

const MOCK_ACTIVITIES = [
  {
    id: '1',
    type: 'like',
    user: { username: 'john_doe' },
    message: 'liked your post',
    timestamp: new Date('2024-03-10T10:00:00'),
  },
  {
    id: '2',
    type: 'comment',
    user: { username: 'jane_smith' },
    message: 'commented on your post',
    timestamp: new Date('2024-03-10T09:30:00'),
  },
  {
    id: '3',
    type: 'friend',
    user: { username: 'mike_jones' },
    message: 'accepted your friend request',
    timestamp: new Date('2024-03-10T09:00:00'),
  },
];

export function useActivity() {
  const [activities] = useState(MOCK_ACTIVITIES);
  return { activities };
}