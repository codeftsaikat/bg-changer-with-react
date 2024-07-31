// import React from "react";
import not_complete from "../assets/not_tick.png";
import tick_tek from "../assets/tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1"
      >
        <img
          src={isComplete ? tick_tek : not_complete}
          alt=""
          className="w-6 h-6"
        />
        <p
          className={`text-slate-800 font-semibold ml-4 text-[17px] decoration-slate-500 
        ${isComplete ? "line-through" : ""}`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
