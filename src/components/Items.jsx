import React from "react";
import { Icon } from "@iconify/react";
export default function Item({ nbr, task, duration }) {
  return (
    <div className="item">
      <div className="task-nbr">
        <h5>{nbr}</h5>
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
          <button id="delete" className="Action-btn">
            <Icon icon="material-symbols:delete-outline" />
          </button>
        </div>
      </div>
    </div>
  );
}
