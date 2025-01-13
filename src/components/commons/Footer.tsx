import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="content-association">
          <p className="title">Trang web được thực hiện cùng với sự tham gia của</p>
          <p>SE170112 - Nguyễn Ngọc Tuấn</p>
          <p>SE171076 - Nguyễn Bình Phương Trâm</p>
          <p>SE172082 - Từ Thiên Bảo</p>
          <p>SE170317 - Lê Quốc Khánh</p>
        </div>
        <div className="disclaimer">
          <p>Trang web này là sản phẩm thực hiện dùng cho môn học MLN131 của</p>
          <b>FPT University</b>
        </div>
      </div>
      <p className="copyright">Copyright © 2025 - All rights reserved</p>
    </div>
  );
}
