import React, { useState, useEffect } from "react";
import ToBuyListItem from "./ToBuyListItem";

const ToBuyList = ({ text, setText }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (!!text) {
      setLists((prevState) => [
        ...prevState,
        { id: Math.random(), completed: false, text, isEditing: false },
      ]);
      setText("");
    }
  }, [text]);

  const handleDelete = (key) => {
    const removeItem = lists.filter((list) => {
      return list.id !== key;
    });
    setLists(removeItem);
  };

  const handleCompleted = (key) => {
    const completedItem = lists.map((list) => {
      if (key === list.id) {
        console.log(list);
        return {
          ...list,
          completed: !list.completed,
        };
      }
      return list;
    });
    setLists(completedItem);
  };

  const handleEdit = ({ text, id }) => {
    const editItem = lists.map((list) => {
      if (id === list.id) {
        list.text = text;
      }
      return list;
    });
    setLists(editItem);
  };

  return (
    <div>
      <ul className="mt-5">
        {lists.map((list) => (
          <ToBuyListItem
            key={list.id}
            list={list.id}
            text={list.text}
            completed={list.completed}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToBuyList;
