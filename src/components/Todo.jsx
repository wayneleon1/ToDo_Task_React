import axios from "axios";
import Item from "./Items";
import { useState, useEffect } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const TodoWrapper = () => {
  const success = () => {
    toast.success("Task Added successfully", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // =================== fetching tasks from Api ===================
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://to-do-list-5c5x.onrender.com/To_Do_List/selectTask"
      );
      const data = response.data.data;
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  // =================== Adding Tasks to Api ====================
  const [duration, setDuration] = useState("");
  const [inputTask, setInputTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://to-do-list-5c5x.onrender.com/To_Do_List/addTask",
        {
          duration: duration,
          task: inputTask,
        }
      );
      success();
      setDuration("");
      setInputTask("");
      console.log(result.data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="select-input">
              <select
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              >
                <option value="Duration">Duration</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="task-input">
              <input
                type="text"
                value={inputTask}
                placeholder="Task"
                onChange={(e) => {
                  setInputTask(e.target.value);
                }}
              />
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
                <a href="#" className="active">
                  All
                </a>
              </li>
              <li>
                <a href="#">Daily</a>
              </li>
              <li>
                <a href="#">Weekly</a>
              </li>
              <li>
                <a href="#">Monthly</a>
              </li>
              <li>
                <a href="#">Yearly</a>
              </li>
            </ul>
          </nav>
          {tasks.map((item, index) => (
            <Item
              key={index}
              count={index + 1}
              ID={item._id}
              task={item.task}
              duration={item.duration}
              display={fetchData()}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
