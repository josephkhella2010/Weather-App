import { Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";

export default function RouterPages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
