"use client";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
// import "./layout";
import "./globals.css";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  const sub = (e) => {
    e.preventDefault();
    settask([...task, { title, desc }]);
    setdesc("");
    settitle("");
  };
  const handledelete = (i) => {
    let copytask = [...task];
    copytask.splice(i, 1);
    settask(copytask);
  };
  let render = <h6>No task available</h6>;
  if (task.length > 0) {
    render = task.map((t, i) => {
      return (
        <li
          key={i}
          className="list-none flex items-center justify-between w-full"
        >
          <div className="flex justify-between items-center w-2/3">
            <h4>{t.title}</h4>
            <h5>{t.desc}</h5>
          </div>
          <button
            className="p-3 bg-red-400 rounded-md"
            onClick={() => handledelete()}
          >
            delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <div>
        <h2 className="text-white text-center font-semibold p-10 text-4xl border-4 bg-black">
          Todo App
        </h2>

        <form>
          <div className="mb-4">
            <label for="username" class="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your description"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-gray-700">
              Description
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              required
            />
          </div>
          <button
            onClick={sub}
            type="submit"
            className="p-3 bg-black text-white rounded-md ml-4 text-l"
          >
            Add
          </button>
        </form>
        <hr />
        <div className="p-7 bg-slate-700 text-yellow-50">{render}</div>
      </div>
    </>
  );
};

export default page;
