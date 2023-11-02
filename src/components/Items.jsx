import React from "react";
export default function Item() {
  return (
    <div className="item">
      <div className="task-nbr">
        <h5>1</h5>
      </div>
      <div className="task-name">
        <p>Learn React</p>
      </div>
      <div className="action">
        <div>
          <button id="edit" className="Action-btn">
            Edit
          </button>
        </div>
        <div>
          <button id="delete" className="Action-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
