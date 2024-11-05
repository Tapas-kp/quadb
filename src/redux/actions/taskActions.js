// src/redux/actions/taskActions.js
import axios from 'axios';

// Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const SET_ERROR = 'SET_ERROR';

// Add task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Delete task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

// Fetch tasks from API (example: Weather API)
export const fetchWeatherData = (city) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    dispatch({ type: SET_TASKS, payload: response.data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
