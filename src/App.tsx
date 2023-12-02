import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { ChromePicker } from "react-color";
import * as htmlToImage from "html-to-image";

function App() {
  const [hoistColor, setHoistColor] = useState("#112244");
  const [starColor, setStarColor] = useState("#ffffff");
  const [stateColor, setStateColor] = useState("#88d1f8");

  return (
    <Stack>
      <div id="flag">
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="300" fill={hoistColor} />

          <path
            d="M 0 0 L 200 0 L 100 150 L 200 300 L 0 300"
            fill={stateColor}
            transform="translate(300)"
          />

          <g transform="translate(150 150) scale(50 50)" fill={starColor}>
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
      </div>

      <Stack direction="row">
        <ChromePicker
          disableAlpha
          color={starColor}
          onChange={({ hex }) => setStarColor(hex)}
        />
        <ChromePicker
          disableAlpha
          color={hoistColor}
          onChange={({ hex }) => setHoistColor(hex)}
        />
        <ChromePicker
          disableAlpha
          color={stateColor}
          onChange={({ hex }) => setStateColor(hex)}
        />
      </Stack>
      <Button
        variant="contained"
        onClick={() => {
          var node = document.getElementById("flag");

          if (!node) return;

          htmlToImage
            .toPng(node, { cacheBust: true })
            .then((dataUrl) => {
              const link = document.createElement("a");
              link.download = `F1953-Beuckman-MBF.png`;
              link.href = dataUrl;
              link.click();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Download Image
      </Button>
    </Stack>
  );
}

export default App;
