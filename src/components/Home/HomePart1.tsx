import SectionNav from "@components/commons/SectionNav";
import Content0Intro from "./content/Content0Intro";
import Content1XHCN from "./content/Content1XHCN";
import Content2XHCN from "./content/Content2XHCN";
import Content3CQ from "./content/Content3CQ";
import Content4Resources from "./content/Content4Resources";
import Content5AI from "./content/Content5AI";
import Content6Minigame from "./content/Content6Minigame";
import "./HomePart1.scss";
import { useRef, useEffect } from "react";

export default function HomePart1() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 7);
  }, []);

  return (
    <div className="home-part1">
      <div className="cover">
        <SectionNav sectionRefs={sectionRefs.current} />
        <div className="content">
          <div ref={(el) => (sectionRefs.current[0] = el)}>
            <Content0Intro />
          </div>
          <div ref={(el) => (sectionRefs.current[1] = el)}>
            <Content1XHCN />
          </div>
          <div ref={(el) => (sectionRefs.current[2] = el)}>
            <Content2XHCN />
          </div>
          <div ref={(el) => (sectionRefs.current[3] = el)}>
            <Content3CQ />
          </div>
          <div ref={(el) => (sectionRefs.current[4] = el)}>
            <Content4Resources />
          </div>
          <div ref={(el) => (sectionRefs.current[5] = el)}>
            <Content5AI />
          </div>
          <div ref={(el) => (sectionRefs.current[6] = el)}>
            <Content6Minigame />
          </div>
        </div>
      </div>
    </div>
  );
}
