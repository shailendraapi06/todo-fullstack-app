const taskService = require('../services/taskService');

const getTasks = async (req, res, next) => {
  console.log('CONTROLLER: getTasks');
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  console.log('CONTROLLER: createTask', req.body);
  try {
    const { title, description } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ message: 'Title is required' });
    }
    const task = await taskService.createTask({ title, description });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  console.log('CONTROLLER: updateTask', req.params.id, req.body);
  try {
    const updated = await taskService.updateTask(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  console.log('CONTROLLER: deleteTask', req.params.id);
  try {
    const deleted = await taskService.deleteTask(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};

const updateTaskStatus = async (req, res, next) => {
  console.log('CONTROLLER: updateTaskStatus', req.params.id, req.body);
  try {
    const { status } = req.body;
    if (!['pending', 'completed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    const updated = await taskService.updateStatus(req.params.id, status);
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const searchTasks = async (req, res, next) => {
  console.log('CONTROLLER: searchTasks', req.query.query);
  try {
    const query = req.query.query || '';
    const list = await taskService.searchTasks(query);
    res.json(list);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  searchTasks,
};