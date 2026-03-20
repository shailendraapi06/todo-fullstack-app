import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchTasks = (searchText = '') => {
  const url = searchText
    ? `${API_BASE}/tasks/search?query=${encodeURIComponent(searchText)}`
    : `${API_BASE}/tasks`;
  return axios.get(url).then((res) => res.data);
};

export const addTask = (task) => axios.post(`${API_BASE}/tasks`, task).then((res) => res.data);
export const updateTask = (id, data) => axios.put(`${API_BASE}/tasks/${id}`, data).then((res) => res.data);
export const deleteTask = (id) => axios.delete(`${API_BASE}/tasks/${id}`).then((res) => res.data);
export const toggleStatus = (id, status) => axios.patch(`${API_BASE}/tasks/${id}/status`, { status }).then((res) => res.data);
