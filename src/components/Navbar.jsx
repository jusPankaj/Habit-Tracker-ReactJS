import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 bg-slate-950 flex justify-between items-center shadow-lg">
      <div className="logo">
        <h1 className="text-3xl font-bold mx-20 text-purple-700">Habit Tracker</h1>
      </div>
      <div className="links flex gap-10">
            {["Homepage","Habit List","Contact Us", "login"].map((item, index) => (
                <a key={index} className={`text-lg capitalize mr-2 hover:opacity-0.5 hover:text-purple-0 font-semibold ${index===3 && "ml-32"}`}>{item}</a>
            ))}
          
      </div>
    </div>
  );
};

export default Navbar;
