import { useEffect } from "react";

export const F1228 = ({ color1, color2, color3, setDefaultColors }: any) => {
  useEffect(() => {
    setDefaultColors &&
      setDefaultColors({
        color1: "#00B6D5",
        color2: "#cc3311",
        color3: "#FFEC00",
      });
  }, []);

  return (
    <svg
      width="500"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,500,300"
    >
      <rect width="500" height="300" fill={color1} />

      <g transform="translate(250,150) scale(130) rotate(-90)">
        <path
          d="M0,0 L-.191,.462 L0,1 L.191,.462 L.707,.707 L.462,.191 L0,0"
          transform="translate(.05,.05) rotate(-22.5) "
          fill={color2}
        />
        <path
          d="M0,0 L-.191,.462 L0,1 L.191,.462 L.707,.707 L.462,.191 L0,0"
          transform="rotate(90) translate(.05,.05) rotate(-22.5)"
        />
        <path
          d="M0,0 L-.191,.462 L0,1 L.191,.462 L.707,.707 L.462,.191 L0,0"
          transform="rotate(180) translate(.05,.05) rotate(-22.5)"
          fill="#ffffff"
        />
        <path
          d="M0,0 L-.191,.462 L0,1 L.191,.462 L.707,.707 L.462,.191 L0,0"
          transform="rotate(270) translate(.05,.05) rotate(-22.5)"
          fill={color3}
        />
      </g>
    </svg>
  );
};
