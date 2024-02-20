import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 bg-slate-950 flex justify-between items-center shadow-lg">
      <div className="logo">
        <Link to='/'><h1 className="text-3xl font-bold mx-20 text-blue-500">Habit Tracker</h1></Link>
      </div>
      <div className="links flex gap-10">
            {["Homepage","Habits","Contact Us", "login"].map((item, index) => (
                <React.Fragment key={index}>
                  {index === 0 || index === 1 ? 
                    (<Link to={index === 0 ? "/" : "/habits"} className={`text-lg capitalize mr-2 hover:opacity-0.5 hover:text-blue-400 font-semibold`}>{item}</Link>)
                    :
                    (<a key={index} className={`text-lg capitalize mr-2 hover:opacity-0.5 hover:text-blue-400 font-semibold ${index===3 && "ml-32"}`}>{item}</a>)
                  }
                </React.Fragment>
            ))}
          
      </div>
    </div>
  );
};

export default Navbar;
