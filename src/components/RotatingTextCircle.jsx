import React from "react";
import "./style.css";

const RotatingTextCircle = ({
  text = "HUYNH DUY PHUC •",
  radius = 40,
  size = 130,
}) => {
  const characters = text.split("");

  return (
      <div
      className="circle"
      style={{ width: size, height: size }}
    >
      {characters.map((char, i) => {
        const angle = (360 / characters.length) * i;
        return (
          <span
            key={i}
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px)`,
            }}
          >
            <span className="char">{char}</span>
          </span>
        );
      })}
    </div>
  );
};

export default RotatingTextCircle;
