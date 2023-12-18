import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("no");
      return;
    }
    if (task.length > 12) {
      alert("no");
      return;
    }
    console.log(task);
    props.addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="write here"
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="btn" type="submit">
        upload
      </button>
    </form>
  );
}
