import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
  toggleStatus,
} from '../services/taskService';
import '../App.css';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  const loadTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await fetchTasks(searchText);
      setTasks(result);
    } catch (err) {
      console.error('Failed to load tasks', err);
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [searchText]);

  const handleAddTask = async (task) => {
    setError('');
    try {
      await addTask(task);
      setSearchText('');
      loadTasks();
    } catch (err) {
      console.error('Failed to add task', err);
      setError('Could not add task');
    }
  };

  const handleDeleteTask = async (id) => {
    setError('');
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.error('Failed to delete task', err);
      setError('Could not delete task');
    }
  };

  const handleToggleStatus = async (task) => {
    setError('');
    try {
      const newStatus = task.status === 'pending' ? 'completed' : 'pending';
      await toggleStatus(task._id, newStatus);
      loadTasks();
    } catch (err) {
      console.error('Failed to toggle status', err);
      setError('Could not update status');
    }
  };

  const handleUpdateTask = async (id, data) => {
    setError('');
    try {
      await updateTask(id, data);
      loadTasks();
    } catch (err) {
      console.error('Failed to update task', err);
      setError('Could not update task');
    }
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <SearchBar value={searchText} onChange={setSearchText} />
      <TaskForm onAdd={handleAddTask} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleStatus}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}

export default Home;
