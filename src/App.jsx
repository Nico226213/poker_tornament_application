import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SetupPage from "./pages/SetupPage";
import PlayPage from "./pages/PlayPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center gap-4 p-4 bg-gray-800 text-white">
        <Link to="/setup">Setup</Link>
        <Link to="/play">Play</Link>
      </nav>

      <Routes>
        {/* 初期ページをSetupPageにしておく */}
        <Route path="/" element={<SetupPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;