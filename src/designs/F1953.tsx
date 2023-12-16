import { useEffect } from "react";

export const F1953 = ({ color1, color2, color3, setDefaultColors }: any) => {
  useEffect(() => {
    setDefaultColors &&
      setDefaultColors({
        color1: "#002c5a",
        color2: "#ffffff",
        color3: "#58c9e6",
      });
  }, []);

  return (
    <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="150" fill={color2} />
      <rect
        width="500"
        height="150"
        transform="translate(0 150)"
        fill={color3}
      />

      <rect width="150" height="300" fill={color1} />
      <path
        d="M 0 0 L 200 0 L 100 150 L 200 300 L 0 300"
        transform="translate(80)"
        fill={color1}
      />

      <g
        transform="translate(92 150) scale(30 30)"
        fill={color2}
        stroke={color2}
        strokeWidth={0.04}
      >
        <g transform="rotate(45)">
          <path d="M 0 0 L 1 0 L 1.707 .707 L .707 .707" />
          <path d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707" />
        </g>
        <g transform="rotate(135)">
          <path d="M 0 0 L 1 0 L 1.707 .707 L .707 .707" />
          <path d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707" />
        </g>
        <g transform="rotate(-45)">
          <path d="M 0 0 L 1 0 L 1.707 .707 L .707 .707" />
          <path d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707" />
        </g>
        <g transform="rotate(-135)">
          <path d="M 0 0 L 1 0 L 1.707 .707 L .707 .707" />
          <path d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707" />
        </g>
        <use href="#quarter" transform="rotate(135)" />
        <use href="#quarter" transform="rotate(-135)" />
        <use href="#quarter" transform="rotate(45)" />
      </g>
    </svg>
  );
};
