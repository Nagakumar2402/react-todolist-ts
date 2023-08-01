import React, { useState } from "react";
import InputField from "./components/InputField";
import Todo from "./model";
import TodoLIst from "./components/TodoLIst";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="bg-blue-400 flex flex-col items-center w-screen h-screen">
      <span className="text-white text-xl md:text-3xl font-bold mt-6 md:10 text-center z-10">
        Task Manager
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoLIst todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
