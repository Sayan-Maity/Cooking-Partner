import React, { useRef } from "react";

export default function EditForm({ handleEdit, id, setIsEditing, list }) {
  const ref = useRef();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current);
    if (ref.current.value) {
      const handleEditInput = ref.current.value;
      handleEdit({ text: handleEditInput, id });
    }
  };

  return (
    <div>
      <form className="flex my-6 mx-0 items-center justify-center">
        <input
          className="block shadow-lg rounded px-2 pt-2 pb-2  bg-pink-100 w-3/5"
          type="text"
          ref={ref}
          placeholder="Edit the item"
        />
        <span
          className="material-symbols-outlined cursor-pointer hover:opacity-30 ml-2 text-gray-500"
          onClick={(e) => {
            setIsEditing(false);
            handleEditSubmit(e);
          }}
        >
          add_task
        </span>
        <span
          className="material-symbols-outlined cursor-pointer hover:opacity-30 ml-2 text-gray-500"
          onClick={() => setIsEditing(false)}
        >
          cancel
        </span>
      </form>
    </div>
  );
}
