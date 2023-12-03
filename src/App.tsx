import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import * as htmlToImage from "html-to-image";
import { F1953 } from "./designs/F1953";
import { F1154 } from "./designs/F1154";

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let Design;
  switch (urlParams.get("d")) {
    case "F1154":
      Design = F1154;
      break;
    default:
      Design = F1953;
      break;
  }

  const [color1, setColor1] = useState("#153573");
  const [color2, setColor2] = useState("#EBDF09");
  const [color3, setColor3] = useState("#009BEF");

  useEffect(() => {
    var node = document.getElementById("flag");

    if (!node) return;

    htmlToImage.toPng(node, { cacheBust: true }).then((dataUrl) => {
      // @ts-ignore - it's there because the html has flagWaver code
      window.flagWaver.flag.setOpts({ imgSrc: dataUrl });
    });
  }, [color1, color2, color3]);

  return (
    <Stack>
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
