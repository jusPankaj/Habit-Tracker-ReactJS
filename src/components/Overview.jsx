import React, { useState } from "react";
import HabitForm from "./HabitForm";
import HabitDisplay from "./HabitDisplay";
import HabitGoals from "./HabitDetails";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabit } from "../features/habitsSlice";
import Navbar from "./Navbar";

const Overview = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const { habits } = useSelector((state) => state.allHabits);

  //function to delete an items

  const deleteHandler = (name) => {
    dispatch(deleteHabit(name));
  };

  console.log(`habits from Overview ${habits}`);

  return (
    <>
    <Navbar />
      <div className="flex border-spacing-1 pt-20">
        <div className="left bg-gray-700 w-1/4 h-screen ">
          <div className="heading flex justify-center items-center my-5">
            <h1 className="text-2xl font-bold text-zinc-300">Goals</h1>

            <button
              onClick={() => setShowModal(true)}
              className="flex text-center justify-center bg-slate-800 w-24 h-8 rounded items-center text-sm ml-28"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-zinc-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Add New
            </button>

            {/* // <HabitForm /> component or Modal will only show up if showModal value is true */}
            {showModal && <HabitForm closeForm={setShowModal} />}
          </div>

          <div className="content flex flex-col w-full ml-16">
            {habits.map((habit, index) => (
              <ul className="flex" key={index}>
                <li
                  className="m-1 p-1.5 w-3/5 bg-slate-800 items-center text-center border-solid border-2 border-black rounded flex justify-between"
                  key={index}
                >
                  {habit.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={() => deleteHandler(habit.title)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="right w-3/4  bg-gray-700">
          <HabitDisplay />
        </div>
      </div>
    </>
  );
};

export default Overview;
