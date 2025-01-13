import { Button } from "@mui/material";
import "./Content1XHCN.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

export default function Content1XHCN() {
  const choices = [
    {
      text: (
        <ul>
          <li>
            Theo C.Mác, chủ nghĩa xã hội ra đời từ sự phát triển vượt bậc của
            lực lượng sản xuất trong xã hội tư bản chủ nghĩa. Cuộc cách mạng
            công nghiệp lần thứ hai với sự ra đời của công nghiệp cơ khí đã tạo
            nên những bước tiến lớn trong lực lượng sản xuất.
          </li>
          <li>
            Chủ nghĩa tư bản tạo ra lực lượng sản xuất vượt trội hơn tất cả
            những gì nhân loại từng đạt được trước đó, nhưng sự phát triển này
            dẫn đến mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa cao
            và quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư
            nhân.
          </li>
        </ul>
      ),
    },
    {
      text: (
        <ul>
          <li>
            C.Mác và V.I.Lênin khẳng định rằng giai cấp vô sản, lực lượng xã hội
            do chủ nghĩa tư bản sinh ra, là động lực chính thúc đẩy sự chuyển
            đổi lên chủ nghĩa xã hội.
          </li>
          <li>
            Mâu thuẫn trong xã hội tư bản khiến quan hệ sản xuất, từ chỗ thúc
            đẩy phát triển, trở nên lỗi thời và kìm hãm sự tiến bộ, đòi hỏi sự
            thay thế bằng một hình thái kinh tế - xã hội mới: chủ nghĩa xã hội.
          </li>
        </ul>
      ),
    },
  ];

  const [choiceInput, setChoiceInput] = useState(0);

  return (
    <div className="content1-xhcn">
      <div className="cover">
        <div className="title-wrapper">
          <p className="title">
            <span className="node">1</span> Chủ nghĩa xã hội
          </p>
          <p className="desc">
            Tìm hiểu các lý thuyết cơ bản, lịch sử phát triển, các hình thái xã
            hội chủ nghĩa trên thế giới, cũng như những đặc điểm, mục tiêu và
            thách thức trong việc hiện thực hóa hệ thống.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="sect-1">
          <div className="title">
            <p>Chủ nghĩa xã hội được hiểu theo</p>
            <p className="num">4</p>
            <p>góc độ khác nhau</p>
          </div>
          <div className="segment">
            <p>
              Là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao
              động chống lại áp bức,bất công, chống các giai cấp thống trị;
            </p>
            <p>
              Là trào lưu tư tưởng, lý luận phản ánh lý tưởng giải phóng nhân
              dân lao động khỏi áp bức, bóc lột, bất công;
            </p>
            <p>
              Là một khoa học - Chủ nghĩa xã hội khoa học, khoa học về sứ mệnh
              lịch sử của giai cấp công nhân;
            </p>
            <p>
              Là một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái kinh
              tế-xã hội cộng sản chủ nghĩa
            </p>
          </div>
        </div>
        <div className="sect-2">
          <p className="title-label">Khái niệm cơ bản</p>
          <div className="content">
            <p>
              <ArrowForwardIosIcon className="icon" />
              <span>
                Chủ nghĩa xã hội, giai đoạn đầu của hình thái kinh tế - xã hội
                cộng sản chủ nghĩa, được C.Mác và Ph.Ăngghen xây dựng trong học
                thuyết về hình thái kinh tế - xã hội, sau này được V.I.Lênin
                phát triển và áp dụng ở Nga Xô Viết, trở thành nền tảng của chủ
                nghĩa Mác-Lênin.
              </span>
            </p>
            <p>
              <ArrowForwardIosIcon className="icon" />
              <span>
                Gồm hai giai đoạn: giai đoạn thấp (chủ nghĩa xã hội) và giai
                đoạn cao (chủ nghĩa cộng sản), với thời kỳ quá độ từ chủ nghĩa
                tư bản lên chủ nghĩa cộng sản.
              </span>
            </p>
            <p>
              <ArrowForwardIosIcon className="icon" />
              <span>
                Chủ nghĩa xã hội đặc trưng bởi nền kinh tế kế hoạch, công hữu
                hóa tư liệu sản xuất và sự phân phối theo lao động, hướng đến
                mục tiêu xóa bỏ bất bình đẳng xã hội, làm tiền đề để đạt tới
                giai đoạn cao hơn của chủ nghĩa cộng sản, nơi nguyên tắc "làm
                theo năng lực, hưởng theo nhu cầu" được thực hiện.
              </span>
            </p>
          </div>
        </div>
        <div className="sect-3">
          <p className="title-label">Điều kiện ra đời chủ nghĩa xã hội</p>
          <div>
            <div className="choices">
              <Button
                className={`choice-btn ${
                  choiceInput == 0 && "choice-btn-opened"
                }`}
                onClick={() => setChoiceInput(0)}
              >
                Về kinh tế
              </Button>
              <Button
                className={`choice-btn ${
                  choiceInput == 1 && "choice-btn-opened"
                }`}
                onClick={() => setChoiceInput(1)}
              >
                Về xã hội
              </Button>
            </div>
            <div className="sect-content">{choices[choiceInput].text}</div>
          </div>
        </div>
        <div className="sect-4">
          <p className="title-label">
            Những đặc trưng bản chất của chủ nghĩa xã hội
          </p>
          <div className="nodes">
            <div className="node">
              <div className="node-icon"></div>
              <div className="node-content">
                <ul>
                  <li>Sở hữu công cộng về tư liệu sản xuất là chủ yếu.</li>
                  <li>
                    Sản xuất nhằm đáp ứng nhu cầu xã hội, không vì lợi nhuận cá
                    nhân.
                  </li>
                  <li>
                    Phát triển lực lượng sản xuất hiện đại gắn với tiến bộ khoa
                    học - công nghệ.
                  </li>
                </ul>
              </div>
            </div>
            <div className="node">
              <div className="node-icon"></div>
              <div className="node-content">
                Giai cấp công nhân giữ vai trò lãnh đạo thông qua chính đảng của
                mình. Xây dựng nhà nước pháp quyền xã hội chủ nghĩa, bảo vệ
                quyền lợi của nhân dân lao động.
              </div>
            </div>
            <div className="node">
              <div className="node-icon"></div>
              <div className="node-content">
                Xóa bỏ áp bức, bất bình đẳng giai cấp, dân tộc và giới tính.
                Thực hiện công bằng xã hội trong phân phối của cải, đảm bảo phúc
                lợi xã hội.
              </div>
            </div>
            <div className="node">
              <div className="node-icon"></div>
              <div className="node-content">
                Xây dựng nền văn hóa mới dựa trên giá trị tiến bộ, nhân văn. Đề
                cao giáo dục, khoa học và ý thức cộng đồng.
              </div>
            </div>
            <div className="node">
              <div className="node-icon"></div>
              <div className="node-content">
                Đảm bảo bình đẳng, đoàn kết giữa các dân tộc. Góp phần thúc đẩy
                hòa bình, hợp tác, và tiến bộ xã hội toàn cầu.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
