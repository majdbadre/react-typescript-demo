import { useState } from "react";
import { useTheme } from "./components/TodoList/TodoContext";
import TodoList from "./components/TodoList/TodoList";
import { Task } from "./components/TodoList/Task";
import AddTodo from "./components/TodoList/AddTodo";

const App = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const { theme, ToggleTheme } = useTheme();

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (task: Task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const Stylingtodos = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "fff",
  };

  return (
    <div style={Stylingtodos}>
      <AddTodo addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
      <button onClick={() => ToggleTheme}></button>
    </div>
  );
};

export default App;
