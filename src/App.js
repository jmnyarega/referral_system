import { Routes, Route } from "react-router-dom";
import WaitingRoom from "./Components/WaitingRoom";
import Referrals from "./Components/Referral";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<WaitingRoom />} />
        <Route path="referrals" element={<Referrals />} />
      </Routes>
    </div>
  );
}

export default App;
