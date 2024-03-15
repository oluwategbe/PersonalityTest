/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import "./index.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RevealY } from "../../utils/animatedText";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  }, [data.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1500) {
      return 5;
    } else if (screenWidth >= 992) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else if (screenWidth >= 560) {
      return 2;
    } else return 1;
  };

  const getVisibleData = () => {
    const startIndex = currentIndex;
    const endIndex = (currentIndex + getVisibleCount()) % data.length;
    if (startIndex <= endIndex) {
      return data.slice(startIndex, endIndex);
    } else {
      return [...data.slice(startIndex), ...data.slice(0, endIndex)];
    }
  };

  const visibleData = getVisibleData();

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Automatic slide change every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]); // Restart the interval when currentIndex changes

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {visibleData?.map((d, i) => (
          <RevealY key={i} delay={i * 0.5} once={true}>
            <div className="carouselCard">
              <img src={d.pic} alt={d.name} />
              <h2>{d.name}</h2>
              <p>{d.bio}</p>
            </div>
          </RevealY>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        <FaAngleLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Carousel;
