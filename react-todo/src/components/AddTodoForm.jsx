import { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    addTodo(value);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form">
      <input
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}