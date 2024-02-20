import { useSelector } from 'react-redux';
import HabitDetails from './HabitDetails';

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);

  return (
    <div className="mt-4 mx-24">
      {habits.map((habit, index) => (
        <div key={index} className="mb-3 rounded-lg bg-zinc-500">
          <p className="font-semibold">
            <span className="text-lg ml-5">{habit.title}</span> : <span className="text-sm">{habit.description}</span>
          </p>
          <HabitDetails key={habit.title} habit={habit} />
        </div>
      ))}
    </div>
  );
};

export default HabitDisplay;


//bg-gradient-to-r from-blue-400 to-green-400 p-4