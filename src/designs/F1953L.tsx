import { useEffect } from "react";

const sin45 = 1 / Math.sqrt(2);

const P1 = `M 0 0 L 1 0 L ${1 + sin45} ${sin45} L ${sin45} ${sin45} L 0 0`;
const P2 = `M 0 0 L 1 0 L ${1 + sin45} ${-sin45} L ${sin45} ${-sin45} L 0 0`;

export const F1953L = ({ color1, color2, color3, setDefaultColors }: any) => {
  useEffect(() => {
    setDefaultColors &&
      setDefaultColors({
        color1: "#002c5a",
        color2: "#ffffff",
        color3: "#58c9e6",
      });
  }, []);

  return (
    <svg
      width="500"
      height="300"
      viewBox="0 0 500 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="300" fill={color3} />

      <rect width="150" height="300" fill={color1} />
      <path
        d="M 0 0 L 200 0 L 100 150 L 200 300 L 0 300"
        transform="translate(90)"
        fill={color1}
      />

      <g transform=" translate(98 150) scale(30 30) rotate(22.5)">
        <g fill={color2} stroke={color2} strokeWidth={0.04}>
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
      </g>
    </svg>
  );
};
