import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
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
  const section3Choices = [
    {
      title: "Kinh tế",
      content:
        "Thời kỳ quá độ yêu cầu chuyển đổi từ nền kinh tế lạc hậu, dựa trên sản xuất nhỏ, sang nền kinh tế hiện đại, xã hội hóa cao. Sự phát triển của các thành phần kinh tế, đặc biệt là kinh tế nhà nước và kinh tế tập thể, đóng vai trò chủ đạo. Đồng thời, cần duy trì và cải cách các thành phần kinh tế tư nhân trong khuôn khổ pháp luật để khai thác tiềm năng sản xuất. Việc xây dựng cơ sở hạ tầng, phát triển công nghiệp hóa, hiện đại hóa là nhiệm vụ then chốt để nâng cao năng lực sản xuất và đảm bảo sự ổn định xã hội.",
    },
    {
      title: "Chính trị",
      content:
        "Thời kỳ quá độ đòi hỏi thiết lập nền dân chủ xã hội chủ nghĩa, xây dựng và củng cố nhà nước pháp quyền của nhân dân. Sự lãnh đạo của Đảng Cộng sản là yếu tố quyết định để định hướng và điều hành quá trình chuyển đổi. Đồng thời, cần nâng cao vai trò của các tổ chức chính trị - xã hội nhằm tăng cường sự tham gia của quần chúng vào quản lý xã hội. Việc đấu tranh chống các thế lực thù địch và bảo vệ thành quả cách mạng cũng là nhiệm vụ quan trọng trong giai đoạn này.",
    },
    {
      title: "Tư tưởng - văn hóa",
      content:
        "Thời kỳ quá độ cần thúc đẩy cuộc cách mạng tư tưởng, xây dựng hệ tư tưởng xã hội chủ nghĩa trở thành hệ tư tưởng chủ đạo. Việc phát triển giáo dục, khoa học, nghệ thuật, và văn hóa là nhằm tạo nên con người mới xã hội chủ nghĩa với tư duy sáng tạo, ý thức cộng đồng, và lòng yêu nước. Đồng thời, phải đấu tranh chống lại các tư tưởng lạc hậu, phản động, bảo vệ nền tảng tư tưởng của Đảng và củng cố niềm tin của nhân dân vào con đường xã hội chủ nghĩa.",
    },
    {
      title: "Xã hội",
      content:
        "Thời kỳ quá độ tập trung vào việc giảm bớt bất bình đẳng, nâng cao chất lượng cuộc sống cho nhân dân. Việc cải thiện các chính sách an sinh xã hội, chăm sóc y tế, giáo dục, và đảm bảo việc làm là những ưu tiên hàng đầu. Đồng thời, cần xây dựng một xã hội đoàn kết, hài hòa, trong đó quyền lợi và nghĩa vụ của mọi người được bảo đảm một cách công bằng. Quá trình này đòi hỏi sự phối hợp chặt chẽ giữa các lĩnh vực để hướng tới mục tiêu cuối cùng là xây dựng chủ nghĩa xã hội.",
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [choice3Input, setChoice3Input] = useState(0);

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
            <p>
              <span className="content-tag">Quá độ trực tiếp</span>
              <span>
                Là quá trình chuyển từ chủ nghĩa tư bản phát triển lên chủ nghĩa
                cộng sản một cách trực tiếp, không qua giai đoạn trung gian. Tuy
                nhiên, trong lịch sử, chưa từng có quốc gia nào thực hiện được
                điều này. Điều này chủ yếu là do sự cần thiết của việc xây dựng
                các cơ sở hạ tầng kinh tế, văn hóa, và xã hội để đảm bảo sự phát
                triển đồng bộ cho chủ nghĩa cộng sản.
              </span>
            </p>
            <p>
              <span className="content-tag">Quá độ gián tiếp</span>
              <span>
                Đây là quá trình chuyển đổi ở các quốc gia chưa trải qua giai
                đoạn phát triển đầy đủ của chủ nghĩa tư bản, thường phải tiến
                hành một cách tuần tự qua các giai đoạn cải cách, xây dựng xã
                hội mới. Các nước như Liên Xô, Trung Quốc, và Việt Nam đã từng
                bước thực hiện điều này với những trình độ phát triển khác nhau.
                <ul>
                  <li>
                    Ở Liên Xô, quá trình này được thực hiện thông qua các kế
                    hoạch hóa kinh tế tập trung và quốc hữu hóa các ngành công
                    nghiệp.
                  </li>
                  <li>
                    Trung Quốc áp dụng các chính sách đổi mới như cải cách kinh
                    tế và mở cửa, kết hợp yếu tố thị trường với kế hoạch hóa xã
                    hội chủ nghĩa.
                  </li>
                  <li>
                    Việt Nam hiện tại đang trong thời kỳ xây dựng và phát triển
                    kinh tế thị trường định hướng xã hội chủ nghĩa, tập trung
                    vào hội nhập quốc tế, cải thiện chất lượng cuộc sống và duy
                    trì các giá trị xã hội chủ nghĩa.
                  </li>
                </ul>
              </span>
            </p>
          </div>
        </div>
        <div className="sect-2">
          <p className="title-label">Con đường rút ngắn</p>
          <div className="content">
            <p>
              Con đường rút ngắn lên chủ nghĩa xã hội không chỉ là một lựa chọn
              chiến lược mà còn phản ánh khát vọng của nhiều quốc gia muốn thoát
              khỏi tình trạng lạc hậu và bất bình đẳng. Việc thực hiện con đường
              này đòi hỏi sự đồng thuận chính trị mạnh mẽ, sự lãnh đạo sáng suốt
              của chính phủ và sự tham gia tích cực của toàn xã hội.
            </p>
            <p>
              Để thành công, các quốc gia cần xác định rõ các ưu tiên phát
              triển, đầu tư mạnh mẽ vào giáo dục, y tế và cơ sở hạ tầng công
              nghệ. Sự chuyển giao công nghệ từ các nước tiên tiến thông qua hợp
              tác quốc tế và việc xây dựng năng lực nội tại cũng đóng vai trò
              then chốt. Bên cạnh đó, việc thúc đẩy đổi mới sáng tạo trong các
              lĩnh vực như trí tuệ nhân tạo, năng lượng tái tạo, và công nghệ
              sinh học có thể giúp các quốc gia không chỉ theo kịp mà còn vượt
              lên trong một số lĩnh vực trọng điểm.
            </p>
            <p>
              Tuy nhiên, con đường này không tránh khỏi những thách thức lớn,
              bao gồm áp lực từ các thế lực bảo thủ, sự cạnh tranh toàn cầu và
              nguy cơ phụ thuộc vào công nghệ nước ngoài. Do đó, cần xây dựng
              một mô hình phát triển kinh tế - xã hội độc lập, tự chủ, nhưng vẫn
              cởi mở và sẵn sàng hội nhập.
            </p>
          </div>
        </div>
        <div className="sect-3">
          <p className="title-label">Đặc điểm</p>
          <div className="sect-content">
            <p>
              <ArrowForwardIosIcon className="icon" />
              <span>
                Thời kỳ quá độ lên chủ nghĩa xã hội là giai đoạn chuyển đổi cách
                mạng từ xã hội cũ (tiền tư bản chủ nghĩa hoặc tư bản chủ nghĩa)
                sang xã hội xã hội chủ nghĩa.
              </span>
            </p>
            <p>
              <ArrowForwardIosIcon className="icon" />
              <span>
                Đây là quá trình phát triển lâu dài và phức tạp, trong đó các
                yếu tố của xã hội cũ và xã hội mới đan xen, đấu tranh lẫn nhau.
              </span>
            </p>
            <p>
              <ArrowForwardIosIcon className="icon" />
              <span>
                Thời kỳ này đòi hỏi sự thay đổi toàn diện về kinh tế, chính trị,
                văn hóa, và xã hội dưới sự lãnh đạo của Đảng Cộng sản, nhằm xây
                dựng nền tảng vật chất, kỹ thuật và tư tưởng cho chủ nghĩa xã
                hội.
              </span>
            </p>
          </div>
          <div className="choices-wrapper">
            <div className="choices">
              {section3Choices.map((choice, index) => (
                <Button
                  className={`choice-btn ${
                    index == choice3Input && "choice-btn-opened"
                  }`}
                  key={index}
                  onClick={() => setChoice3Input(index)}
                >
                  <p className="choice-title">{choice.title}</p>
                </Button>
              ))}
            </div>
            <div className="choice-text">
              {section3Choices[choice3Input].content}
            </div>
          </div>
        </div>
      </div>
      <div className="summary">
        <KeyboardDoubleArrowDownIcon className="summary-icon" />
        <p className="summary-content">
          Thời kỳ quá độ lên chủ nghĩa xã hội là giai đoạn tất yếu, chuyển đổi
          toàn diện về kinh tế, chính trị, văn hóa, xã hội, dưới sự lãnh đạo của
          Đảng, nhằm xây dựng nền tảng cho chủ nghĩa xã hội, với trọng tâm là
          phát triển kinh tế hiện đại, nâng cao chất lượng sống và thúc đẩy công
          bằng, đoàn kết xã hội.
        </p>
      </div>
    </div>
  );
}
