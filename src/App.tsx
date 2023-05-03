import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorLogin from "./components/ErrorLogin";
import Taskslist from "./components/Taskslist";
import NewTask from "./components/NewTask";
import Login from "./components/Login";
import TaskComponent from "./components/TaskComponent";

const Tasks = [
  {
    id: "001",
    status: 0,
    priority: 2,
    title: "Develop website homepage",
    description:
      "Create a visually appealing and responsive homepage for the website",
    schedule: {
      creation_time: "2021-07-23T10:00:00"
    },
    author_name: "John Smith"
  },
  {
    id: "002",
    status: 1,
    priority: 1,
    title: "Implement user authentication",
    description: "Add user authentication feature to the website",
    schedule: {
      creation_time: "2021-07-24T14:30:00"
    },
    author_name: "Sarah Lee"
  },
  {
    id: "003",
    status: 2,
    priority: 0,
    title: "Fix CSS issues on mobile devices",
    description: "Resolve CSS issues on the website for mobile devices",
    schedule: {
      creation_time: "2021-07-25T11:15:00"
    },
    author_name: "John Smith"
  },
  {
    id: "004",
    status: 0,
    priority: 1,
    title: "Add search functionality",
    description: "Implement search feature on the website",
    schedule: {
      creation_time: "2021-07-26T09:00:00"
    },
    author_name: "John Smith"
  },
  {
    id: "005",
    status: 1,
    priority: 2,
    title: "Optimize website performance",
    description: "Improve website loading speed and overall performance",
    schedule: {
      creation_time: "2021-07-27T16:45:00"
    },
    author_name: "James Wilson"
  },
  {
    id: "006",
    status: 2,
    priority: 0,
    title: "Fix broken links on the website",
    description: "Identify and fix broken links on the website",
    schedule: {
      creation_time: "2021-07-28T13:20:00"
    },
    author_name: "Sarah Lee"
  },
  {
    id: "007",
    status: 0,
    priority: 1,
    title: "Create product page",
    description: "Design and develop a product page for the website",
    schedule: {
      creation_time: "2021-07-29T10:30:00"
    },
    author_name: "David Taylor"
  },
  {
    id: "008",
    status: 1,
    priority: 2,
    title: "Implement payment gateway",
    description: "Add payment gateway to the website for online transactions",
    schedule: {
      creation_time: "2021-07-30T14:00:00"
    },
    author_name: "Emma Anderson"
  },
  {
    id: "009",
    status: 2,
    priority: 0,
    title: "Translate website content",
    description: "Translate website content to multiple languages",
    schedule: {
      creation_time: "2021-07-31T11:45:00"
    },
    author_name: "Ryan Garcia"
  },
  {
    id: "010",
    status: 0,
    priority: 1,
    title: "Design email templates",
    description: "Create visually appealing email templates for the website",
    schedule: {
      creation_time: "2021-08-01T09:15:00"
    },
    author_name: "Emma Anderson"
  }
];

const Authors = [
  {
    id: "001",
    author_name: "John Smith",
    password: "123"
  },
  {
    id: "002",
    author_name: "Sarah Lee",
    password: "123"
  },
  {
    id: "003",
    author_name: "James Wilson",
    password: "123"
  },
  {
    id: "004",
    author_name: "David Taylor",
    password: "123"
  },
  {
    id: "005",
    author_name: "Emma Anderson",
    password: "123"
  },
  {
    id: "006",
    author_name: "Ryan Garcia",
    password: "123"
  }
];

function App() {
  const [tasks, setTasks] = useState(Tasks);

  const changeTask = (task) => {
    setTasks((tasks) =>
      tasks.map((taskEl) => (taskEl.id === task.id ? task : taskEl))
    );
  };
  const deleteTask = (id) => {
    const filtered = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filtered);
  };

  return (
    <BrowserRouter>
      <div className="main__wrapper">
        <Switch>
          <Route path="/" exact={true}>
            <Login authors={Authors} />
          </Route>
          <Route path="/taskslist">
            <Taskslist Tasks={tasks} />
          </Route>
          <Route path="/newtask">
            <NewTask
              authors={Authors}
              onFinish={(newTask) => {
                setTasks((pre) => [
                  ...pre,
                  { ...newTask, id: Math.random().toString() }
                ]);
              }}
            />
          </Route>
          <Route path="/errorlogin">
            <ErrorLogin />
          </Route>
          <Route path="/task/:id">
            <TaskComponent
              Tasks={tasks}
              changeTask={changeTask}
              deleteTask={deleteTask}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
