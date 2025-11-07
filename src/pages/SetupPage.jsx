import { useState } from "react";

function Setup() {
  const [tournamentName, setTournamentName] = useState("");
  const [playerCount, setPlayerCount] = useState(8);
  const [startChips, setStartChips] = useState(10000);
  const [blindInterval, setBlindInterval] = useState(15);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("設定内容:", {
      tournamentName,
      playerCount,
      startChips,
      blindInterval,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          トーナメント設定
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">トーナメント名</label>
          <input
            type="text"
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="例: Monthly Poker Cup"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">プレイヤー数</label>
          <input
            type="number"
            min="2"
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">スタートチップ</label>
          <input
            type="number"
            min="1000"
            step="1000"
            value={startChips}
            onChange={(e) => setStartChips(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            ブラインド間隔（分）
          </label>
          <input
            type="number"
            min="5"
            step="5"
            value={blindInterval}
            onChange={(e) => setBlindInterval(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          登録
        </button>
      </form>
    </div>
  );
}

export default Setup;