import { useState } from "react";
import { Task } from "./Task";

type AddTodoProps = {
  addTodo: (task: Task) => void;
};

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (description && title) {
      addTodo({ id: Date.now(), title, description, completed });
      setTitle("");
      setDescription("");
    }
  };
  
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="">title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="">description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div>
        <label htmlFor="">title:</label>
        <input type="checkbox" onChange={() => setCompleted(!completed)} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default AddTodo;
