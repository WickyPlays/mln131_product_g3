import "./Content3CQ.scss";
import img2 from "@assets/Content3P2.jpg";
import img3 from "@assets/Content3P3.jpg";
import img4 from "@assets/Content3P4.jpg";
import img5 from "@assets/Content3P5.jpg";
import img6 from "@assets/Content3P6.jpg";
import img7 from "@assets/Content3P7.jpeg";
import { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Content3CQ() {
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  const translateX = useRef("translateX(0)");
  const sectionsTitles = [
    "Sơ lược",
    "Về kinh tế",
    "Về chính trị",
    "Về phúc lợi xã hội",
    "Về văn hóa giáo dục",
    "Về quản trị xã hội",
    "Về môi trường quốc tế",
  ];

  const sectionsContent = [
    <div>
      <p>
        Các quốc gia phương Tây nổi tiếng với sự phát triển vượt bậc trong kinh
        tế, xã hội, và khoa học công nghệ, cùng với hệ thống phúc lợi xã hội
        tiên tiến, mang lại đời sống ổn định và chất lượng cao cho người dân.
      </p>
      <p>
        Bên cạnh đó, các quốc gia phương Tây còn nổi bật với sự minh bạch và
        hiệu quả trong quản lý nhà nước, tạo điều kiện cho xã hội vận hành một
        cách công bằng và bền vững. Các chính sách khuyến khích đổi mới sáng
        tạo, sự hợp tác chặt chẽ giữa chính phủ, doanh nghiệp, và các tổ chức xã
        hội cũng là những yếu tố quan trọng thúc đẩy sự phát triển bền vững.
      </p>
    </div>,
    <div>
      <p>
        Nền kinh tế đa thành phần: Các nước phương Tây duy trì nền kinh tế thị
        trường với nhiều thành phần kinh tế hoạt động song song. Việt Nam có thể
        học cách quản lý và điều tiết các thành phần kinh tế, đặc biệt là phối
        hợp giữa kinh tế nhà nước và kinh tế tư nhân, nhằm thúc đẩy tăng trưởng
        kinh tế bền vững.
      </p>
      <p>
        Phát triển lực lượng sản xuất hiện đại: Học hỏi cách áp dụng công nghệ
        tiên tiến, đầu tư vào khoa học - công nghệ và phát triển lực lượng lao
        động chất lượng cao để nâng cao năng suất và hiện đại hóa nền kinh tế.
      </p>
    </div>,
    <div>
      <p>
        Nhà nước pháp quyền: Học cách xây dựng một nhà nước pháp quyền mạnh mẽ,
        minh bạch, nơi pháp luật được thượng tôn, nhằm bảo vệ quyền lợi của mọi
        tầng lớp nhân dân. Dân chủ: Việt Nam có thể tham khảo mô hình dân chủ xã
        hội của các nước phương Tây, như cách lắng nghe ý kiến của người dân,
        xây dựng cơ chế giám sát và trách nhiệm giải trình hiệu quả.
      </p>
    </div>,
    <div>
      <p>
        Chế độ an sinh xã hội: Học cách thiết lập các chính sách an sinh xã hội
        bao trùm, như chăm sóc sức khỏe toàn dân, trợ cấp thất nghiệp, và lương
        hưu. Điều này có thể giúp đảm bảo công bằng xã hội và cải thiện chất
        lượng sống.
      </p>
      <p>
        Hệ thống y tế: Tham khảo cách các quốc gia phát triển cung cấp dịch vụ y
        tế miễn phí hoặc chi phí thấp, với cơ sở vật chất hiện đại và nhân lực y
        tế chất lượng cao.
      </p>
    </div>,
    <div>
      <p>
        Tiếp thu tinh hoa văn hóa: Học hỏi từ những giá trị văn hóa tiến bộ, như
        tư duy đổi mới, đề cao sáng tạo và tôn trọng sự đa dạng văn hóa.
      </p>
      <p>
        Phát triển giáo dục: Cải thiện hệ thống giáo dục theo hướng hiện đại
        hóa, gắn kết giữa lý thuyết và thực tiễn, tập trung vào nghiên cứu khoa
        học và đào tạo nhân lực chất lượng cao.
      </p>
    </div>,
    <div>
      <p>
        Quản lý hiệu quả: Học từ các nước phương Tây về cách quản trị xã hội
        hiện đại, ứng dụng công nghệ số trong quản lý hành chính, dịch vụ công,
        và đảm bảo tính minh bạch. Xây dựng lòng tin: Các nước phát triển chú
        trọng xây dựng lòng tin giữa nhà nước và người dân thông qua sự minh
        bạch và các chính sách công bằng. Đây là bài học quan trọng cho Việt Nam
        trong việc xây dựng chế độ xã hội chủ nghĩa.
      </p>
    </div>,
    <div>
      <p>
        Hợp tác quốc tế: Học hỏi cách các quốc gia phương Tây mở rộng hợp tác
        quốc tế, thúc đẩy hội nhập kinh tế và tận dụng lợi ích của toàn cầu hóa
        để phát triển đất nước.
      </p>
    </div>,
  ];
  const images = [null, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-content-32");
      const viewportHeight = window.innerHeight;

      let minDistanceToMiddle = Infinity;
      let active = null;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const middleOfViewport = viewportHeight / 2;
        const distanceToMiddle = Math.abs(
          rect.top + rect.height / 2 - middleOfViewport
        );

        if (distanceToMiddle < minDistanceToMiddle) {
          minDistanceToMiddle = distanceToMiddle;
          active = index + 1;
        }
      });

      setActiveSection(active);

      const totalHeight =
        document.documentElement.scrollHeight - viewportHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);

      const firstSectionTop = sections[0]?.getBoundingClientRect().top;
      const lastSectionBottom =
        sections[sections.length - 1]?.getBoundingClientRect().bottom;

      setShowNavbar(
        firstSectionTop <= viewportHeight && lastSectionBottom >= 0
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const calculateTransform = () => {
      const navbarContent = document.querySelector(".navbar-content-32");
      const highlightedItem = document.querySelector(
        ".nav-item-32.highlighted"
      );

      if (navbarContent && highlightedItem) {
        const navbarCenter = navbarContent.offsetWidth / 2;
        const itemOffset =
          highlightedItem.offsetLeft + highlightedItem.offsetWidth / 2;
        return `translateX(${navbarCenter - itemOffset}px)`;
      }
      return translateX.current;
    };

    translateX.current = calculateTransform();
  }, [activeSection]);

  return (
    <div className="content3-cq">
      <div className="cover">
        <div className="title-wrapper">
          <p className="title">
            <span className="node">3</span> Câu hỏi kiến tạo xã hội (CQ)
          </p>
          <p className="desc">
            Ở các nước phương Tây hiện tại có rất nhiều quốc gia phát triển, chế
            độ phúc lợi và chăm sóc sức khỏe cho người dân rất tốt. Việt Nam quá
            độ lên chủ nghĩa xã hội cần học hỏi gì từ những nước phát triển đó?
          </p>
        </div>
      </div>
      <div className="content-32">
        <p className="tag">
          "Ở các nước phương Tây hiện tại có rất nhiều quốc gia phát triển, chế
          độ phúc lợi và chăm sóc sức khỏe cho người dân rất tốt. Việt Nam quá
          độ lên chủ nghĩa xã hội cần học hỏi gì từ những nước phát triển đó?"
        </p>
        <div className="content">
          {sectionsTitles.map((title, index) => (
            <div
              key={index}
              className={`section-content-32 ${
                activeSection === index + 1 ? "active" : ""
              }`}
            >
              <div
                className={`content-block ${
                  index % 2 === 0 || window.innerWidth < 1024 ? "left" : "right"
                }`}
              >
                {window.innerWidth < 1024 || index % 2 === 0 ? (
                  <>
                    <div className="text">
                      <h2 className="section-title">
                        {index + 1}. {title}
                      </h2>
                      <p className="section-content">
                        {sectionsContent[index]}
                      </p>
                    </div>
                    <div className="image">
                      {images[index] != null && (
                        <img src={images[index]} alt={`Section ${index + 1}`} />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image">
                      {images[index] != null && (
                        <img src={images[index]} alt={`Section ${index + 1}`} />
                      )}
                    </div>
                    <div className="text">
                      <h2 className="section-title">
                        {index + 1}. {title}
                      </h2>
                      <p className="section-content">
                        {sectionsContent[index]}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
          <div
            className="navbar-content-32"
            style={{
              transform: translateX.current,
              transition: "transform 0.3s ease",
            }}
          >
            {sectionsTitles.map((title, index) => (
              <span
                key={index}
                className={`nav-item-32 ${
                  activeSection === index + 1 ? "highlighted" : ""
                }`}
                onClick={() => {
                  const sections = document.querySelectorAll(
                    ".section-content-32"
                  );
                  sections[index].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {title}
              </span>
            ))}
          </div>
          <div
            className="progress-bar"
            style={{
              width: `${(activeSection * 100) / sectionsTitles.length}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="summary">
        <KeyboardDoubleArrowDownIcon className="summary-icon" />
        <p className="summary-content">
          Việt Nam, trong quá trình quá độ lên chủ nghĩa xã hội, cần chọn lọc
          học hỏi từ các quốc gia phát triển để thúc đẩy sự phát triển kinh tế,
          cải thiện chất lượng cuộc sống, và xây dựng một xã hội công bằng, văn
          minh. Tuy nhiên, việc học hỏi cần gắn với điều kiện cụ thể của đất
          nước, đảm bảo phù hợp với mục tiêu xây dựng chủ nghĩa xã hội và giữ
          vững bản sắc dân tộc.
        </p>
      </div>
    </div>
  );
}
