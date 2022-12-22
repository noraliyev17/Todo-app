import React, { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const index = () => {
  const [task, setTask] = useState([]);

  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    const check = {
      name: name.trim().length === 0,
      date: date.trim().length === 0,
      family: family.trim().length === 0,
    };
    if (check.name || check.family || check.date) {
      toast.error("Iltimos Taskni To'ldiring", {
        autoClose: 1000,
      });
    } else {
      const newTask = {
        id: uuidv4(),
        name: name,
        family: family,
        date: date,
      };
      setTask([...task, newTask]);

      setDate("");
      setFamily("");
      setName("");
      toast.success("Task Qo'shildi !", {
        autoClose: 1000,
      });

    }}
    const deleteTask = (id) => {
        const filterTask = task.filter((e) => {
          return e.id !== id;
        });
        setTask(filterTask);
        toast.info("Task Muvaffaqqiyatli O'chirildi", {
          position: "top-right",
          autoClose: 1000,
        });
      };
    

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="w-75 p-4 mx-auto mt-5 shadow">
          <form action="#" onSubmit={() => addTask()}>
            <label htmlFor="#" className="w-100">
              <strong>Enter your name</strong>
              <input
                type="text"
                id="title"
                className="form-control p-3 my-3 "
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="" className="w-100">
              <strong>Enter your surname</strong>
              <input
                type="text"
                id="title"
                className="form-control p-3 my-3 "
                placeholder="enter your family"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              />
            </label>
            <label htmlFor="" className="w-100">
              <strong>Enter your date</strong>
              <input
                type="date"
                id="title"
                className="form-control p-3 my-3 "
                placeholder="enter your date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <button type="submit" className=" w-100 btn btn-success">
              Add task
            </button>
          </form>
        </div>
        <div className="w-75 p-4 mx-auto mt-5 shadow">
          <table className="table table-striped table-sm table-hover table-bordered">
            <thead>
              <tr>
                <th>ID</th> <th>Name</th> <th>Family</th> <th>Date</th>{" "}
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              {task.length > 0
                ? task.map((e, i) => {
                    return (
                      <tr key={e.id}>
                        <td>{i + 1} </td>
                        <td>{e.name}</td>
                        <td>{e.family}</td>
                        <td>{e.date}</td>
                        <td>
                          <button
                            onClick={() => deleteTask(e.id)}
                            className="btn btn-danger"
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "NOT FOUND"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default index;
