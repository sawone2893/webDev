import "./Task.css";
export const Task = ({ task, handleDelete, handleEdit }) => {
  return (
    <div className="task">
      <li key={task.id}>
        <p>
          <span className="name">{task.name}</span>
          <span className="time">{task.time}</span>
        </p>
      </li>
      <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
      <i
        onClick={() => handleEdit(task.id)}
        className="bi bi-pencil-square"
      ></i>
    </div>
  );
};
