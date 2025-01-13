import Content1Intro from "./content/Content1Intro";
import Content5AI from "./content/Content5AI";
import "./HomePart1.scss";

export default function HomePart1() {
  return (
    <div className="home-part1">
      <div className="cover">
        <div className="content">
          <Content1Intro />
          <Content5AI />
        </div>
      </div>

    </div>
  );
}
