import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./SectionNav.scss";

export default function SectionNav({ sectionRefs }) {
  const [activeNode, setActiveNode] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (index) => {
    sectionRefs[index]?.scrollIntoView({ behavior: "smooth" });
    setActiveNode(index);
  };

  const handleScroll = () => {
    let inViewport = false;

    sectionRefs.forEach((ref, index) => {
      const rect = ref.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        setActiveNode(index);
        inViewport = true;
      }
    });

    const firstSection = sectionRefs[0]?.getBoundingClientRect();
    const lastSection = sectionRefs[sectionRefs.length - 1]?.getBoundingClientRect();
    const outsideView = firstSection.bottom < 0 || lastSection.top > window.innerHeight;
    const reachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;

    setIsVisible(inViewport || (!outsideView && !reachedBottom));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`section-nav ${isVisible ? "visible" : ""}`}>
      <div className="nodes">
        {[0, 1, 2, 3, 4, 5, 6].map((node) => (
          <div
            key={node}
            className={`node ${activeNode === node ? "node-active" : ""}`}
            onClick={() => handleClick(node)}
          >
            {node === 0 ? (
              <MenuIcon />
            ) : (
              <span className="node-label">{node}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
