import React, { FC } from "react";
import { Link, generatePath } from "react-router-dom";

type TaskP = {
  id: string;
  title: string;
  author_name: string;
};

type Props = {
  task: TaskP;
};

const Task: FC<Props> = ({ task }) => {
  return (
    <div className="wrapper-task">
      <Link to={generatePath("/task/:id", { id: task.id })}>
        <h3>{task.title}</h3>
        <span>developer</span>
        <h4>{task.author_name}</h4>
      </Link>
    </div>
  );
};

export default Task;
