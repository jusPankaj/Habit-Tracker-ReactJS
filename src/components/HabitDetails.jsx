import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../features/habitsSlice';

const HabitDetails = ({habit, habit: {details}}) => {

  const dispatch = useDispatch();

  //Handlers to change status on click
  const checkStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: 'done',
          },
        ],
      })
    );
  };

  const doneStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: 'fail',
          },
        ],
      })
    );
  };

  const failStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: 'none',
          },
        ],
      })
    );
  };

  return (
    <div className="grid grid-cols-7 gap-4">
      {details.map((detail) => (
        <Fragment key={detail.day}>
          <div className="col">
            <p className="text-center day-headings text-black">{detail.day}</p>

            {detail.status === 'none' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-6 w-6 mx-auto text-white mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => checkStatusHandler([habit.title, detail.day])}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}

            {detail.status === 'done' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-6 w-6 mx-auto text-green-900 rounded-full bg-green-600 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => doneStatusHandler([habit.title, detail.day])}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}

            {detail.status === 'fail' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-6 w-6 mx-auto text-red-900 bg-red-500 rounded-full mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => failStatusHandler([habit.title, detail.day])}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default HabitDetails;

