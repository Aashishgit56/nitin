import { useState } from 'react';

const MOCK_FRIENDS = [
  {
    id: '1',
    username: 'john_doe',
    fullName: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  },
  {
    id: '2',
    username: 'jane_smith',
    fullName: 'Jane Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
  },
];

export function useFriends() {
  const [friends, setFriends] = useState(MOCK_FRIENDS);

  const removeFriend = (id: string) => {
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return { friends, removeFriend };
}