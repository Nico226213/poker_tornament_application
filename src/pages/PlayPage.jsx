// src/pages/Play.jsx
import React from "react";
import { useTimer } from "../hooks/useTimer";
import TimerControls from "../components/TimerControls";

function Play() {
  const { formatTime, isRunning, start, pause, reset } = useTimer(600); // 10分タイマー

  const mockData = {
    level: 1,
    smallBlind: 100,
    bigBlind: 200,
    ante: 0,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8" style={{ width: '100%' }}>
      <h1 className="text-3xl font-bold mb-12 text-center">トーナメント進行</h1>

      {/* タイマーとコントロール */}
      <div className="bg-gray-800 p-20 rounded-3xl shadow-2xl mb-12 w-full max-w-6xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* カウントダウン数字 */}
        <p 
          className="font-black tracking-tight leading-none mb-12"
          style={{ fontSize: '12rem', fontWeight: '900', textAlign: 'center', width: '100%' }}
        >
          {formatTime()}
        </p>
        
        {/* コントロールボタン */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <TimerControls
            isRunning={isRunning}
            onStart={start}
            onPause={pause}
            onReset={reset}
          />
        </div>
      </div>

      {/* レベル・ブラインド情報 */}
      <div 
        className="grid grid-cols-3 gap-6 w-full max-w-4xl"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
      >
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
          <h2 className="text-lg font-semibold mb-2">Ante</h2>
          <p className="text-2xl">{mockData.ante}</p>
        </div>
      </div>
    </div>
  );
}

export default Play;