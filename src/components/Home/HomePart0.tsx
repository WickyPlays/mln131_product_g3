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
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
     
        </div>
      </div>
      <div className={`drawer ${isOpen ? "open" : "closed"}`}>
        <div
          className={`toggle-button ${
            isOpen ? "toggle-button-open" : "toggle-button-closed"
          }`}
          onClick={toggleDrawer}
        >
          {isOpen ? "❮" : "❯"}
        </div>
        <div className="content">
          <h3>MLN131 - Group 3</h3>
          <h1>Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội</h1>
          <div className="divider"></div>
          <div className="credits">
            <section>
              <p className="title">Biên soạn</p>
              <p>SE170112 - Nguyễn Ngọc Tuấn</p>
              <p>SE171076 - Nguyễn Bình Phương Trâm</p>
              <p>SE172082 - Từ Thiên Bảo</p>
              <p>SE170317 - Lê Quốc Khánh</p>
            </section>
            <section>
              <p className="title">Giảng viên hướng dẫn</p>
              <p>Nguyễn Anh Khoa</p>
            </section>
            <section>
              <p className="title">Mã nguồn</p>
              <p>
                <a href="https://github.com/WickyPlays/mln131_product_g3">
                  https://github.com/WickyPlays/mln131_product_g3
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
