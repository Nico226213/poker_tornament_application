// src/pages/Play.jsx
import React from "react";

function Play() {
  const mockData = {
    level: 1,
    smallBlind: 100,
    bigBlind: 200,
    ante: 0,
    remainingTime: "30:00",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">トーナメント進行</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Level</h2>
          <p className="text-2xl">{mockData.level}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Blinds</h2>
          <p className="text-2xl">
            {mockData.smallBlind} / {mockData.bigBlind}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Time</h2>
          <p className="text-2xl">{mockData.remainingTime}</p>
        </div>
      </div>
    </div>
  );
}

export default Play;