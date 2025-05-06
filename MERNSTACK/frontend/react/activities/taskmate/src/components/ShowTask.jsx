import { Task } from "./Task";
import "./ShowTask.css";
export const ShowTask = ({ tasklist, setTasklist, setTask }) => {
  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTasklist);
  };

  const handleEdit = (id) => {
    const seletedTask = tasklist.find((todo) => todo.id === id);
    setTask(seletedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">ToDo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <Task
            task={todo}
            key={todo.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </section>
  );
};
