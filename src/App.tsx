import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(import.meta.env.VITE_YOUR_API_USERS)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {error ? <p>{error}</p> : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.username}) - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
