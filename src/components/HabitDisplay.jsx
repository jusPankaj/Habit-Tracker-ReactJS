import { useSelector } from 'react-redux';
import HabitDetails from './HabitDetails';

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);

  return (
    <div className="m-4 mx-24">
      {habits.map((habit, index) => (
        <div key={index} className="mb-3 rounded-lg h-24 py-1 bg-slate-800 my-1">
          <p className="font-semibold ">
            <span className="text-md ml-10 text-zinc-300">{habit.title}</span> : <span className="text-zinc-300  font-normal">{habit.description}</span>
          </p>
          <HabitDetails key={habit.title} habit={habit} />
        </div>
      ))}
    </div>
  );
};

export default HabitDisplay;


//bg-gradient-to-r from-blue-400 to-green-400 p-4