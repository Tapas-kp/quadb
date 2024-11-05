
import axios from 'axios';


export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const SET_ERROR = 'SET_ERROR';


export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});


export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});


export const fetchWeatherData = (city) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    dispatch({ type: SET_TASKS, payload: response.data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
