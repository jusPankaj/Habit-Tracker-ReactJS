import React from "react";

const HabitDisplay = () => {
  return (
    <div className="mt-3">
      <div className="container h-24 w-auto border-solid border-black-500 border-2 rounded  mx-24 ">
        <div className="header flex items-center text-center">
          <h3 className="font-semibold p-1 ml-12">GoTo Gym : </h3>
          <p className="text-sm">
            {" "}
            &nbsp; Must start to go to gym Regularly
          </p>
        </div>
        <div className="weeklyContent flex justify-around">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
            (days, index) => (
              <div className="mx-2">
                <p>{days}</p>
                <button className="mt-1 w-7 border-solid border-2 border-b-gray-400 rounded-full bg-blue-800">Y</button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitDisplay;
