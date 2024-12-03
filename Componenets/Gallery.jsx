import React, { useRef, useEffect } from "react";
import Slides from "./Sildes";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image-2.png";
import image3 from "../Assets/image-3.png";
import image4 from "../Assets/image-4.png";
import image5 from "../Assets/image-5.png";
import image6 from "../Assets/image-6.png";


export default function Gallery() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    });
  }, []);

  return (
    <div className="gallery-wrap">
      <div ref={scrollContainer} className="gallery">
        <div>
          <span>
            <Slides imgUrl={image1} />
          </span>
          <span>
            <Slides imgUrl={image2} />
          </span>
          <span>
            <Slides imgUrl={image3} />
          </span>
          <span>
            <Slides imgUrl={image4} />
          </span>
          <span>
            <Slides imgUrl={image5} />
          </span>
          <span>
            <Slides imgUrl={image6} />
          </span>
        </div>
      </div>
    </div>
  );
}
