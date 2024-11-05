// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { login, logout } from './redux/actions/authActions';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(isAuthenticated ? logout() : login())}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
      {isAuthenticated ? (
        <>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <p>Please log in to see your tasks.</p>
      )}
    </div>
  );
};

export default App;
