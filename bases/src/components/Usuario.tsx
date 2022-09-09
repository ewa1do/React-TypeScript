import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

const initialUser: User = {
  uid: '',
  name: '',
};

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser(
      (prev) =>
        (prev = {
          uid: 'ABC123',
          name: 'Eduardo',
        })
    );
  };

  const logout = () => {
    setUser((prev) => (prev = initialUser));
  };

  return (
    <div className='mt-5'>
      <h3>Usuario: useState</h3>

      <button
        className='btn btn-outline-primary'
        onClick={login}
      >
        Login
      </button>
      <button
        className='btn btn-outline-primary mx-2'
        onClick={logout}
      >
        Logout
      </button>

      {user ? (
        <pre
          data-tag={'pre'}
          className='mt-4'
        >
          {JSON.stringify(user, null, 4)}
        </pre>
      ) : (
        <h5>No User</h5>
      )}
    </div>
  );
};
