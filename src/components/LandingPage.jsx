import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Habit Tracker</h1>
        <p className="text-lg text-gray-600 mb-8">
          Track your habits and achieve your goals with our simple and intuitive Habit Tracker application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Track Your Habits</h2>
            <p className="text-gray-600 mb-4">
              Easily add and track your habits. Stay motivated by seeing your progress over time.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Organized</h2>
            <p className="text-gray-600 mb-4">
              Organize your habits into categories and prioritize your tasks for better productivity.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
