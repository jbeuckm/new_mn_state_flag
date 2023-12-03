import { useEffect } from "react";

export const F29 = ({ color1, color2, color3, setDefaultColors }: any) => {
  useEffect(() => {
    setDefaultColors &&
      setDefaultColors({
        color1: "#0b205b",
        color2: "#ffc242",
        color3: "#ffffff",
      });
  }, []);

  return (
    <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" fill={color1} />
      <rect width="80" height="300" fill={color2} />
      <rect width="80" height="300" fill={color2} transform="translate(420)" />

      <g transform="translate(250 150) scale(45 45)" fill={color3}>
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
