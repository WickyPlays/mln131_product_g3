import { Button } from "@mui/material";
import "./Content6Minigame.scss";

export default function Content6Minigame() {
  return (
    <div className="content6-minigame">
      <div className="cover">
        <p className="title">
          <span className="node">6</span> Minigame
        </p>
        <p className="desc">
          Hãy cùng thử thách kiến thức của bạn thông qua trò chơi nhé!
        </p>
        <Button className="btn-join">Tham gia tại Kahoot</Button>
      </div>
    </div>
  );
}
