import { useEffect } from "react";

export const F1154 = ({ color1, color2, color3, setDefaultColors }: any) => {
  useEffect(() => {
    setDefaultColors &&
      setDefaultColors({
        color1: "#4aa254",
        color2: "#2742ab",
        color3: "#ffffff",
      });
  }, []);

  return (
    <svg
      width="500"
      height="300"
      viewBox="0 0 500 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="150" fill={color1} />
      <rect
        width="500"
        height="150"
        fill={color2}
        transform="translate(0 150)"
      />

      <g
        transform="translate(250 150) scale(32 32)"
        fill={color3}
        stroke={color3}
        strokeWidth={1}
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
