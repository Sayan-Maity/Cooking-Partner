import React, { useRef } from "react";

export default function InputForm({ setText }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(ref.current.value);
    ref.current.value = "";
  };

  return (
    <div>
      <form
        className="flex my-10 mx-0 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="block shadow-lg rounded px-2 pt-2 pb-2 w-96"
          type="text"
          ref={ref}
          placeholder="Type an item"
        />
        <span
          className="material-symbols-outlined cursor-pointer hover:opacity-30 ml-3"
          onClick={handleSubmit}
        >
          add
        </span>
      </form>
    </div>
  );
}
