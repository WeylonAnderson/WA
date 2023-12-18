import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });
  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);
  const addTask = (task) => {
    console.log("Task in main => ", task);
    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };
    setList((list) => [...list, newTask]);
  };
  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList([...newList]);
  };
  const completeTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return item;
      }
    });
    setList([...newList]);
  };
  return (
    <div className="main">
      <h3 className="title">Task list</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
