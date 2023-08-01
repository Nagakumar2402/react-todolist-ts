import React from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-11/12 items-center relative mt-5"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className=" w-full px-8 py-5 border-none text-2xl rounded-[50px] transition-all shadow-[inset_0_0_5px_black] focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] "
      />
      <button
        type="submit"
        className=" rounded-full  absolute inset-y-0 end-0 grid place-content-center w-12 h-12 m-3 bg-blue-500 transition-all duration-500 hover:bg-blue-600 hover:shadow-md active:scale-125 "
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
