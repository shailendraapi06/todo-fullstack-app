import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle, onUpdate }) {
  if (!tasks.length) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
