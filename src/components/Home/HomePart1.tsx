import Content1Intro from "./content/Content1Intro";
import Content4CQ from "./content/Content4CQ";
import Content5AI from "./content/Content5AI";
import Content6Minigame from "./content/Content6Minigame";
import "./HomePart1.scss";

export default function HomePart1() {
  return (
    <div className="home-part1">
      <div className="cover">
        <div className="content">
          <Content1Intro />
          <Content4CQ />
          <Content5AI />
          <Content6Minigame />
        </div>
      </div>

    </div>
  );
}
