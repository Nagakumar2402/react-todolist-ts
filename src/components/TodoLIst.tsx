import React from "react";
import Todo from "../model";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoLIst: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-wrap justify-evenly w-11/12 ">
      {todos.map((item) => (
        <SingleTodo
          item={item}
          setTodos={setTodos}
          key={item.id}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default TodoLIst;
