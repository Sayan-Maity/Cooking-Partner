import React, { useState } from "react";
import EditForm from "./EditForm";

export default function ToBuyListItem({
  list,
  text,
  handleCompleted,
  handleDelete,
  handleEdit,
  completed,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={` ${completed ? "completed" : ""}`}>
      <div className="mx-auto justify-center flex items-center w-2/4 mt-4">
        <span
          className="material-symbols-outlined items-center cursor-pointer hover:opacity-30 mr-3 text-rose-500"
          checked
          onClick={() => handleCompleted(list)}
        >
          done
        </span>
        <div className="p-2 tracking-wider rounded-md bg-lime-200 w-3/5">
          {isEditing ? (
            <EditForm
              handleEdit={handleEdit}
              text={text}
              list={list}
              id={list}
              setIsEditing={setIsEditing}
              isEditing={isEditing}
            />
          ) : (
            <>{text}</>
          )}
        </div>
        <span
          className="material-symbols-outlined items-center cursor-pointer hover:opacity-30 ml-3"
          onClick={() => handleDelete(list)}
        >
          delete
        </span>
        <span
          className="material-symbols-outlined items-center cursor-pointer hover:opacity-30 ml-3"
          onClick={() => setIsEditing(!isEditing)}
        >
          edit
        </span>
      </div>
    </div>
  );
}
