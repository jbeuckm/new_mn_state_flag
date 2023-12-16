import { useEffect } from "react";

const sin45 = 1 / Math.sqrt(2);

const P1 = `M 0 0 L 1 0 L ${1 + sin45} ${sin45} L ${sin45} ${sin45} L 0 0`;
const P2 = `M 0 0 L 1 0 L ${1 + sin45} ${-sin45} L ${sin45} ${-sin45} L 0 0`;

export const F2100 = ({ color1, color2, color3, setDefaultColors }: any) => {
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
      <rect width="500" height="200" fill={color1} />
      <rect y={200} width="500" height="100" fill={color3} />

      <g
        transform="translate(110 100) scale(20 20)"
        fill={color2}
        stroke={color2}
        strokeWidth={1}
      >
        <g transform="rotate(45)">
          <path d={P1} />
          <path d={P2} />
        </g>
        <g transform="rotate(135)">
          <path d={P1} />
          <path d={P2} />
        </g>
        <g transform="rotate(-45)">
          <path d={P1} />
          <path d={P2} />
        </g>
        <g transform="rotate(-135)">
          <path d={P1} />
          <path d={P2} />
        </g>
      </g>
    </svg>
  );
};
