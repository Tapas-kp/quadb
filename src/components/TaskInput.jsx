
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ id: Date.now(), name: task }));
      setTask('');
    }
  };
  let obj={
    backgroundColor:task?"green":"blue"
  }

  return (
 
    <div id='dj'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} style={obj}>Add Task</button>
    </div>
  );
};

export default TaskInput;
