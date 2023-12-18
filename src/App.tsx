// @ts-nocheck

import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import * as htmlToImage from "html-to-image";
import { F1953 } from "./designs/F1953";
import { F1953L } from "./designs/F1953L";
import { F1154 } from "./designs/F1154";
import { F29 } from "./designs/F29";
import { F1228 } from "./designs/F1228";
import { F2100 } from "./designs/F2100";
import { Emojifier } from "./Emojifier";
import { flagEmoji } from "./flagEmoji";

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let Design;
  switch (urlParams.get("d")) {
    case "F29":
      Design = F29;
      break;
    case "F1154":
      Design = F1154;
      break;
    case "F1953":
      Design = F1953;
      break;
    case "F1953L":
      Design = F1953L;
      break;
    case "F2100":
      Design = F2100;
      break;
    case "F1228":
    default:
      Design = F1228;
      break;
  }

  const [color1, setColor1] = useState("#153573");
  const [color2, setColor2] = useState("#EBDF09");
  const [color3, setColor3] = useState("#009BEF");

  useEffect(() => {
    var node = document.getElementById("flag")?.childNodes[0] as HTMLElement;

    if (!node) return;

    const flagSvgUrl =
      "data:image/svg+xml;utf8," + encodeURIComponent(node.innerHTML);
    document.getElementById("emojiSource")?.setAttribute("href", flagSvgUrl);

    htmlToImage.toPng(node, { cacheBust: true }).then((dataUrl) => {
      flagEmoji(dataUrl, document.getElementById("destCanvas"));

      // @ts-ignore - it's there because the html has flagWaver code
      window.flagWaver.flag.setOpts({ imgSrc: dataUrl });

      htmlToImage
        .toPng(document.getElementById("dispGradient"), { cacheBust: true })
        .then((gradientDataUrl) => {
          // document.getElementById("emojiSource")?.setAttribute("href", dataUrl);

          document
            .getElementById("gradientDispMapImage")
            ?.setAttribute("href", gradientDataUrl);
        });
    });
  }, [color1, color2, color3]);

  if (urlParams.get("d") === "user") {
    return <Emojifier />;
  }

  return (
    <div style={{ position: "relative" }}>
      <Stack direction="row" spacing={1}>
        <div id="flag">
          <Design
            color1={color1}
            color2={color2}
            color3={color3}
            setDefaultColors={({ color1, color2, color3 }: any) => {
              setColor1(color1);
              setColor2(color2);
              setColor3(color3);
            }}
          />
        </div>

        <div id="emojiHolder" style={{ height: 32, width: 32 }}>
          <canvas
            id="destCanvas"
            width="500"
            height="500"
            style={{
              transformOrigin: "top left",
              transform: `scale(${32 / 500})`,
            }}
          ></canvas>
        </div>
      </Stack>

      <Box style={{ backgroundColor: "#ffffff" }}>
        <Stack direction="row">
          <ChromePicker
            disableAlpha
            color={color2}
            onChange={({ hex }) => setColor2(hex)}
          />
          <ChromePicker
            disableAlpha
            color={color1}
            onChange={({ hex }) => setColor1(hex)}
          />
          <ChromePicker
            disableAlpha
            color={color3}
            onChange={({ hex }) => setColor3(hex)}
          />
        </Stack>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          // @ts-ignore
          var node = document.getElementById("flag")
            ?.childNodes[0] as HTMLElement;

          if (!node) return;

          htmlToImage
            .toPng(node, { cacheBust: true })
            .then((dataUrl) => {
              const link = document.createElement("a");
              link.download = `${urlParams.get("d")}.png`;
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

      <Button
        variant="contained"
        onClick={() => {
          // @ts-ignore
          var node = document.getElementById("emojiHolder");

          if (!node) return;

          htmlToImage
            .toPng(node, { cacheBust: true })
            .then((dataUrl) => {
              const link = document.createElement("a");
              link.download = `${urlParams.get("d")}-emoji.png`;
              link.href = dataUrl;
              link.click();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Download Emoji
      </Button>
    </div>
  );
}

export default App;
