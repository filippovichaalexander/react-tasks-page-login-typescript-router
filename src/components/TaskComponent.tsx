import React, { useState, FC } from "react";
import { useParams, useHistory } from "react-router-dom";

type IdParams = {
  id: string;
};

type Tasks = {
  id: string;
  title: string;
  author_name: string;
  description: string;
  status: number | any;
  priority: number | any;
};

type Props = {
  Tasks: Tasks[];
  changeTask: (tasks: Tasks) => {};
  deleteTask: (tasks: Tasks) => {};
};

const TaskComponent: FC<Props> = ({ Tasks, changeTask, deleteTask }) => {
  const history = useHistory();

  const { id } = useParams<IdParams>();

  const task = Tasks.find((task) => String(task.id) === id);

  const [status, setStatus] = useState(task?.status);
  const [priority, setPriority] = useState(task?.priority);

  const handleSaveTask = (event) => {
    event.preventDefault();

    changeTask({
      ...task,
      status,
      priority
    });

    history.push("/taskslist");
  };

  const handleDeleteTask = (id: any) => {
    deleteTask(id);

    history.push("/taskslist");
  };

  if (!task) {
    return <div>No Task</div>;
  }

  return (
    <div className="wrapper__task-component">
      <div>
        <h3>{task.title}</h3>
        <h4>{task.author_name}</h4>
        <p>{task.description}</p>
        <form className="form-task-component" onSubmit={handleSaveTask}>
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(Number(e.target.value))}
          >
            <option value="select" disabled>
              Select Status
            </option>
            <option value="0">In queue</option>
            <option value="1">In progress</option>
            <option value="2">Completed</option>
          </select>
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          >
            <option value="select" disabled>
              Select Priority
            </option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
          <input type="submit" value="Save" />
          <input
            id="btn--delete"
            type="button"
            value="Delete"
            onClick={() => handleDeleteTask(id)}
          />
        </form>
      </div>
    </div>
  );
};

export default TaskComponent;
