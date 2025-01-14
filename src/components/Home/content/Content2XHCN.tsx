import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Content2XHCN.scss";
import { useState } from "react";

export default function Content2XHCN() {
  const choices = [
    {
      title: "Cộng sản nguyên thủy",
      text: (
        <ul>
          <li>
            Chủ nghĩa cộng sản nguyên thủy là hình thái kinh tế - xã hội đầu
            tiên trong lịch sử loài người, dựa trên sở hữu chung và lao động tập
            thể.
          </li>
        </ul>
      ),
    },
    {
      title: "Chiếm hữu nô lệ",
      text: (
        <ul>
          <li>
            Chiếm hữu nô lệ là một hình thái kinh tế - xã hội dựa trên việc sở
            hữu con người như tài sản, dẫn đến sự phân hóa xã hội rõ nét.
          </li>
        </ul>
      ),
    },
    {
      title: "Phong kiến",
      text: (
        <ul>
          <li>
            Xã hội phong kiến dựa trên chế độ sở hữu ruộng đất và mối quan hệ
            phụ thuộc giữa địa chủ và nông dân, phản ánh sự bất bình đẳng lớn.
          </li>
        </ul>
      ),
    },
    {
      title: "Tư bản chủ nghĩa",
      text: (
        <ul>
          <li>
            Tư bản chủ nghĩa tập trung vào sản xuất hàng hóa và giá trị thặng
            dư, nơi các nhà tư bản sở hữu tư liệu sản xuất và bóc lột lao động
            của công nhân.
          </li>
        </ul>
      ),
    },
    {
      title: "Cộng sản chủ nghĩa",
      text: (
        <ul>
          <li>
            Cộng sản chủ nghĩa hướng tới một xã hội không còn sự phân chia giai
            cấp, của cải được phân phối theo nhu cầu và mọi người đều bình đẳng.
          </li>
        </ul>
      ),
    },
  ];

  const [expanded, setExpanded] = useState(false);

  //@ts-ignore
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="content2-xhcn">
      <div className="cover">
        <div className="title-wrapper">
          <p className="title">
            <span className="node">2</span> Thời kì quá độ lên chủ nghĩa xã hội
          </p>
          <p className="desc">
            Giai đoạn lịch sử đặc biệt trong sự phát triển của xã hội, khi các
            quốc gia chuyển từ nền kinh tế và chính trị tư bản chủ nghĩa sang
            xây dựng và phát triển chủ nghĩa xã hội. Chủ đề này tập trung vào
            việc tìm hiểu bản chất, mục tiêu và các vấn đề nổi bật trong quá
            trình chuyển đổi này.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="sect-1">
          <p className="title-label">
            Những đặc trưng bản chất của chủ nghĩa xã hội
          </p>
          <div className="content">
            {choices.map((choice, index) => (
              <Accordion
                key={index}
                //@ts-ignore
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <p className="choice-title">{choice.title}</p>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <div className="choice-content">{choice.text}</div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="sect-2">
          <p className="title-label">Các loại thời kỳ quá độ</p>
          <div className="content">
            Quá độ trực tiếp: Từ chủ nghĩa tư bản phát triển lên chủ nghĩa cộng
            sản, chưa từng diễn ra. Quá độ gián tiếp: Các nước chưa phát triển
            qua chủ nghĩa tư bản, như Liên Xô, Trung Quốc, Việt Nam, đang trong
            thời kỳ này với trình độ khác nhau.
          </div>
        </div>
        <div className="sect-3">
          <p className="title-label">Con đường rút ngắn</p>
          <div className="content">
            Các nước lạc hậu, với sự hỗ trợ của giai cấp vô sản quốc tế, có thể
            tiến thẳng lên chủ nghĩa xã hội, bỏ qua chế độ tư bản chủ nghĩa. Lợi
            thế toàn cầu hóa và cách mạng công nghiệp 4.0 giúp rút ngắn quá
            trình phát triển.
          </div>
        </div>
      </div>
    </div>
  );
}
