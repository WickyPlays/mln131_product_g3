import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "@components/Home/HomePage";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
