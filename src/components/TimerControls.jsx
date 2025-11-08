export default function TimerControls({ isRunning, onStart, onPause, onReset }) {
  return (
    <div className="flex justify-center items-center gap-6">
      {!isRunning ? (
        <button 
          onClick={onStart} 
          className="bg-green-600 hover:bg-green-700 text-white font-bold text-2xl px-12 py-6 rounded-xl shadow-lg transition"
        >
          開始
        </button>
      ) : (
        <button 
          onClick={onPause} 
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-2xl px-12 py-6 rounded-xl shadow-lg transition"
        >
          停止
        </button>
      )}
      <button 
        onClick={onReset} 
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold text-2xl px-12 py-6 rounded-xl shadow-lg transition"
      >
        リセット
      </button>
    </div>
  );
}
