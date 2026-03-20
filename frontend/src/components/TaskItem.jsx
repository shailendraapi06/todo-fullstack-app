import { useState } from 'react';

function TaskItem({ task, onDelete, onToggle, onUpdate }) {
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description);
  const [isEdit, setIsEdit] = useState(false);

  const handleSave = () => {
    if (!editTitle.trim()) return;
    onUpdate(task._id, { title: editTitle.trim(), description: editDesc.trim() });
    setIsEdit(false);
  };

  return (
    <div className={`task-item ${task.status}`}>
      {isEdit ? (
        <div className="edit-box">
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <input value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
        </div>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description || 'No description'}</p>
        </>
      )}

      <small>{new Date(task.createdAt).toLocaleString()}</small>
      <div className="buttons">
        <button onClick={() => onToggle(task)}>
          {task.status === 'pending' ? 'Done' : 'Undo'}
        </button>
        {isEdit ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
