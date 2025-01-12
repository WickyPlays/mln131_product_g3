import Content1Intro from "./content/Content1Intro";
import "./HomePart1.scss";

export default function HomePart1() {
  return (
    <div className="home-part1">
      <div className="content-bg">
        <div className="cover"></div>
        <div className="content">
          <Content1Intro />
        </div>
      </div>
    </div>
  );
}
