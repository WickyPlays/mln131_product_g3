import Content0Intro from "./content/Content0Intro";
import Content1XHCN from './content/Content1XHCN'
import Content2XHCN from "./content/Content2XHCN";
import Content3CQ from "./content/Content3CQ";
import Content5AI from "./content/Content5AI";
import Content6Minigame from "./content/Content6Minigame";
import "./HomePart1.scss";

export default function HomePart1() {
  return (
    <div className="home-part1">
      <div className="cover">
        <div className="content">
          <Content0Intro />
          <Content1XHCN />
          <Content2XHCN />
          <Content3CQ />
          <Content5AI />
          <Content6Minigame />
        </div>
      </div>

    </div>
  );
}
