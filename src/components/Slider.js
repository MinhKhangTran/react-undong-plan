import React from "react";
import { slider } from "../assets/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Slider() {
  const [slide, setSlide] = React.useState(slider);
  const [value, setValue] = React.useState(0);

  const prevSlide = () => {
    setValue((oldValue) => {
      let value = oldValue - 1;
      if (value < 0) {
        value = slide.length - 1;
      }
      return value;
    });
  };
  const nextSlide = () => {
    setValue((oldValue) => {
      let value = oldValue + 1;
      if (value > slide.length - 1) {
        value = 0;
      }
      return value;
    });
  };

  React.useEffect(() => {
    let timer = setInterval(() => {
      setValue((oldValue) => {
        let value = oldValue + 1;
        if (value > slide.length - 1) {
          value = 0;
        }
        return value;
      });
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [value]);
  return (
    <section
      className="w-full overflow-hidden relative"
      style={{ height: "calc(100vh - 46px)" }}
    >
      {slide.map((item, i) => {
        const { id, text, img } = item;
        let position = "transform translate-x-full opacity-0";
        if (i === value) {
          position = "transform translate-x-0 opacity-100";
        }
        if (i === value - 1 || (value === 0 && i === slide.length - 1)) {
          position = "transform -translate-x-full opacity-0";
        }
        return (
          <div
            key={id}
            className={`${position} absolute h-full w-full transition transition-all duration-700 ease-in-out`}
          >
            <img
              className="h-full w-full object-cover"
              src={img}
              alt={text}
            ></img>
            <h1
              className="absolute transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl font-bold tracking-wider text-center"
              style={{ top: "50%", left: "50%" }}
            >
              {text}
            </h1>
          </div>
        );
      })}
      <button
        className="text-white font-bold text-5xl absolute transform -translate-y-1/2 left-0"
        style={{ top: "50%" }}
        onClick={prevSlide}
      >
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button
        className="text-white font-bold text-5xl absolute transform -translate-y-1/2 right-0"
        style={{ top: "50%" }}
        onClick={nextSlide}
      >
        <FiChevronRight></FiChevronRight>
      </button>
    </section>
  );
}
