import { Button } from "@mui/material";
import "./Content4Resources.scss";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function Content4Resources() {
  return (
    <div className="content4-resources">
      <p className="title">
        <span className="node">4</span> Tư liệu sưu tầm
      </p>
      <div className="content">
        <div className="file-nodes">
          <p className="content-title">Tài liệu tham khảo</p>
          <Button className="file">
            <PictureAsPdfIcon sx={{ color: "#FF0000", fontSize: "50px" }} />
            <div className="file-desc">
              <p className="file-label">Chủ nghĩa xã hội khoa học Mác-Lenin</p>
              <p className="file-download-label">Download</p>
            </div>
          </Button>
        </div>
        <div className="video-nodes">
          <p className="content-title">Video tham khảo thêm</p>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/6ItwIIWZmDs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
