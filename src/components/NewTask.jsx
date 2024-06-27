import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask)
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-emerald-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-emerald-700 hover:text-emerald-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
