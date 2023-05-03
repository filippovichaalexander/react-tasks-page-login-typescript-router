import React from "react";
import { useHistory } from "react-router-dom";
import Task from "./Task";

const Taskslist = ({ Tasks }) => {
  const history = useHistory();

  const newtask = () => {
    history.push("/newtask");
  };

  return (
    <div className="wrapper">
      {/* <h1>Tasks</h1> */}
      <div className="newtask__wrapper">
        <input type="button" value="New Task" onClick={newtask} />
      </div>
      <div className="tasks__wrapper">
        <div className="tasks__tasks-item">
          <h2>In queue</h2>
          {Tasks.filter((task) => task.status === 0).map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
        <div className="tasks__tasks-item">
          <h2>In progress</h2>
          {Tasks.filter((task) => task.status === 1).map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
        <div className="tasks__tasks-item">
          <h2>Completed</h2>
          {Tasks.filter((task) => task.status === 2).map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </div>
      {/* <button>Back</button> */}
    </div>
  );
};

export default Taskslist;
