import { useState } from 'react';

const MOCK_REQUESTS = [
  {
    id: '1',
    username: 'sarah_parker',
    fullName: 'Sarah Parker',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
  },
  {
    id: '2',
    username: 'mike_jones',
    fullName: 'Mike Jones',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
  },
];

export function useFriendRequests() {
  const [requests, setRequests] = useState(MOCK_REQUESTS);

  const acceptRequest = (id: string) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  const rejectRequest = (id: string) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return { requests, acceptRequest, rejectRequest };
}