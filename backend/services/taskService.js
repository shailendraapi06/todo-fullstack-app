const Task = require('../models/Task');

const getAllTasks = async () => {
  return await Task.find({}).sort({ createdAt: -1 });
};

const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

const updateTask = async (id, updateData) => {
  return await Task.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

const updateStatus = async (id, status) => {
  return await Task.findByIdAndUpdate(id, { status }, { new: true });
};

const searchTasks = async (query) => {
  return await Task.find({ title: new RegExp(query, 'i') });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  updateStatus,
  searchTasks,
};