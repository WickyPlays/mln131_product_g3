import { useState } from "react";
//@ts-ignore
import bg from "@assets/intro.jpg";
import "./HomePart0.scss";

export default function HomePart0() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-part0">
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className={`drawer ${isOpen ? "open" : "closed"}`}>
        <div className={`toggle-button ${isOpen ? "toggle-button-open" : "toggle-button-closed"}`} onClick={toggleDrawer}>
          {isOpen ? "❮" : "❯"}
        </div>
        <h3>MLN131 - Group 3</h3>
        <h1>Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội</h1>
        <div className="divider"></div>
      </div>
    </div>
  );
}
