import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habitsSlice";
import { details } from "../features/habitsSlice";

const HabitForm = ({ closeForm }) => {
  const dispatch = useDispatch();

  //creating states for title and description of form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addHandler() {
    dispatch(addHabit({ title, description, details }));
    closeForm(false);
  }

  return (
    //Creating a Modal for form where we can take input as Habit title and Description from user

    <div className="modal-background fixed inset-0 bg-black-800 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="modal-container w-[600] border-solid border-2 border-purple-600 rounded-xl bg-slate-800">
        <div className="py-6 px-6 lg:px-8 text-left flex flex-col">
          <button
            className="text-red-600 font-bold text-2xl place-self-end"
            onClick={() => closeForm(false)}
          >
            X
          </button>
          <form className="form">
            <label className="text-lg font-bold">Habit Title</label>
            <input
              className="my-2 w-full h-12 text-black px-2 rounded bg-white"
              type="text"
              id="title"
              autoFocus={true}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-lg font-bold">Description</label>{" "}
            <input
              className="my-2 w-full h-12 text-black px-2 rounded bg-white"
              type="text"
              id="description"
              placeholder="Short-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
          <div className="footer">
            <button
              type="submit"
              className="h-10 w-24 mt-2 border-2 border-none bg-blue-500 rounded font-semibold mr-5"
              onClick={() => addHandler()}
            >
              Add Habit
            </button>
            <button
              type="submit"
              className="h-10 w-24 mt-2 border-2 border-none bg-red-500 rounded font-semibold ml-5"
              onClick={() => closeForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitForm;
