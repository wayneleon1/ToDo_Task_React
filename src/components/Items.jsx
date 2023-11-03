import React from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
export default function Item({ ID, count, task, duration, display }) {
  // ================== delete function =====================
  async function handleDelete(id) {
    const conf = window.confirm("Do you want to delete this task");
    if (conf) {
      try {
        const response = await axios.delete(
          `https://to-do-list-5c5x.onrender.com/To_Do_List/deleteTask/${id}`
        );
        alert("Task has delete successfully");
        {
          display;
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <div className="item">
      <div className="task-nbr">
        <h5>{count}</h5>
      </div>
      <div className="task-name">
        <p>
          {task} / <span>{duration}</span>
        </p>
      </div>
      <div className="action">
        <div>
          <button id="edit" className="Action-btn">
            <Icon icon="mingcute:edit-line" />
          </button>
        </div>
        <div>
          <button
            id="delete"
            className="Action-btn"
            onClick={(e) => {
              handleDelete(ID);
            }}
          >
            <Icon icon="material-symbols:delete-outline" />
          </button>
        </div>
      </div>
    </div>
  );
}
