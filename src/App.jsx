import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList]= useState([]);
  const [task, setTask]=useState({});
  return (
    <>
     <div className="App">
         <Header />
         <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
         <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
     </div>
    </>
  );
}