import React, { useState, FC } from "react";
import { useHistory } from "react-router-dom";

type Author = {
  id: string;
  author_name: string;
};

type Props = {
  authors: Author[];
  onFinish: (newTask: any) => void;
};

interface ITask {
  title: string;
  author_name: string;
  description: string;
  status: number;
  priority: number;
}

const NewTask: FC<Props> = ({ authors, onFinish }) => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("");
  let [priority, setPriority] = useState("");
  let history = useHistory();

  let back = () => {
    history.push("/taskslist");
  };

  const sendTask = () => {
    let newTask: ITask = {
      title: title,
      author_name: author,
      description: description,
      status: +status,
      priority: +priority
    };
    onFinish(newTask);
    history.replace("/taskslist");

    title = "";
    author = "";
    description = "";
    status = "";
    priority = "";
  };
  return (
    <>
      <h1 className="title title--center">New Task</h1>
      <div className="wrapper-newtask">
        <div className="item">
          <label>Title</label>
          <input
            placeholder="Type title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="item">
          <label>Author</label>
          <select
            onChange={(e) => setAuthor(e.target.value)}
            defaultValue="select"
          >
            <option value="select" disabled>
              Select Author
            </option>
            {authors.map((author) => (
              <option key={author.id} value={author.author_name}>
                {author.author_name}
              </option>
            ))}
          </select>
        </div>
        <div className="item">
          <label>Description</label>
          <textarea
            placeholder="Type title"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="item">
          <label>Status</label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            defaultValue="select"
          >
            <option value="select" disabled>
              Select Status
            </option>
            <option value="0">In queue</option>
            <option value="1">In progress</option>
            <option value="2">Completed</option>
          </select>
        </div>
        <div className="item">
          <label>Priority</label>
          <select
            onChange={(e) => setPriority(e.target.value)}
            defaultValue="select"
          >
            <option value="select" disabled>
              Select Priority
            </option>
            <option value="0">Low</option>
            <option value="1">Midium</option>
            <option value="2">High</option>
          </select>
        </div>
        <div className="buttons">
          <div className="btns__wrapper">
            <input onClick={() => back()} type="button" value="Cancel" />
            <input onClick={sendTask} type="button" value="Save" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTask;
