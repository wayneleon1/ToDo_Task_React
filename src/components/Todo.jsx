import Item from "./Items";
import React from "react";
export const TodoWrapper = () => {
  return (
    <div className="Container">
      <div className="side-img">
        <img
          src="https://browsecat.art/sites/default/files/hd-material-wallpapers-109500-753598-389197.png"
          alt=""
        />
      </div>
      <div className="Content">
        <div className="titles">
          <h1>
            Make a <span>better</span> Plan
          </h1>
          <h1>for your life</h1>
        </div>
        <div className="text">
          <p>
            Whoever you are,whatever you are looking for, we
            <br /> have the perfect place for you.
          </p>
        </div>
        <form>
          <div className="form-container">
            <div className="select-input">
              <select name="">
                <option value="">Duration</option>
                <option value="">Daily</option>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
            </div>
            <div className="task-input">
              <input type="text" placeholder="Task" />
            </div>
            <div className="task-btn">
              <button className="Add-btn" type="submit">
                Add task
              </button>
            </div>
          </div>
        </form>
        <div className="result-content">
          <nav>
            <ul>
              <li>
                <a href="" className="active">
                  All
                </a>
              </li>
              <li>
                <a href="">Daily</a>
              </li>
              <li>
                <a href="">Weekly</a>
              </li>
              <li>
                <a href="">Monthly</a>
              </li>
              <li>
                <a href="">Yearly</a>
              </li>
            </ul>
          </nav>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};
