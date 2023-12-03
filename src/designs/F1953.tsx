import { useEffect } from "react";

export const F1953 = ({ color1, color2, color3, setDefaultColors }: any) => {
  useEffect(() => {
    setDefaultColors &&
      setDefaultColors({
        color1: "#22375F",
        color2: "#ffffff",
        color3: "#88D4FE",
      });
  }, []);

  return (
    <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill={color1} />

      <path
        d="M 0 0 L 200 0 L 100 150 L 200 300 L 0 300"
        fill={color3}
        transform="translate(300)"
      />

      <g transform="translate(150 150) scale(50 50)" fill={color2}>
        <g transform="rotate(45)">
          <path
            d="M 0 0 L 1 0 L 1.707 .707 L .707 .707"
            transform="translate(.24 .1)"
          />
          <path
            d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707"
            transform="translate(.24 -.1)"
          />
        </g>
        <g transform="rotate(135)">
          <path
            d="M 0 0 L 1 0 L 1.707 .707 L .707 .707"
            transform="translate(.24 .1)"
          />
          <path
            d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707"
            transform="translate(.24 -.1)"
          />
        </g>
        <g transform="rotate(-45)">
          <path
            d="M 0 0 L 1 0 L 1.707 .707 L .707 .707"
            transform="translate(.24 .1)"
          />
          <path
            d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707"
            transform="translate(.24 -.1)"
          />
        </g>
        <g transform="rotate(-135)">
          <path
            d="M 0 0 L 1 0 L 1.707 .707 L .707 .707"
            transform="translate(.24 .1)"
          />
          <path
            d="M 0 0 L 1 0 L 1.707 -.707 L .707 -.707"
            transform="translate(.24 -.1)"
          />
        </g>
        <use href="#quarter" transform="rotate(135)" />
        <use href="#quarter" transform="rotate(-135)" />
        <use href="#quarter" transform="rotate(45)" />
      </g>
    </svg>
  );
};
