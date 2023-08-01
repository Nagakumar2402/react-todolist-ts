import React, { useState, useRef, useEffect } from "react";
import Todo from "../model";
import { MdEdit, MdDelete, MdTask, MdSave } from "react-icons/md";
interface SingleTodoProps {
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<SingleTodoProps> = ({ item, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);

  const inputFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputFocusRef.current?.focus();
  }, [edit]);
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    );

    setEdit(!edit);
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div className="flex w-full md:w-3/12 p-5 mt-3 bg-blue-900">
      {edit ? (
        <input
          ref={inputFocusRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className=" focus:outline-none bg-transparent w-[190px] text-white"
        />
      ) : !item.isDone ? (
        <span className="flex-1 p-1 text-white text-md font-bold border-none">
          {item.todo}
        </span>
      ) : (
        <s className="flex-1 p-1 text-red-600 text-md font-bold border-none">
          {item.todo}
        </s>
      )}

      <span
        className="ml-3 text-white flex items-center cursor-pointer text-2xl"
        onClick={() => {
          if (!edit && !item.isDone) {
            setEdit(!edit);
          }
        }}
      >
        {edit ? (
          <MdSave onClick={(e: React.FormEvent) => handleEdit(e, item.id)} />
        ) : (
          <MdEdit />
        )}
      </span>
      <span className="ml-3 text-white flex items-center cursor-pointer text-2xl">
        <MdDelete onClick={() => handleDelete(item.id)} />
      </span>
      <span className="ml-3 text-white flex items-center cursor-pointer text-2xl">
        <MdTask onClick={() => handleDone(item.id)} />
      </span>
    </div>
  );
};

export default SingleTodo;
