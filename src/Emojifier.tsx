import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { flagEmoji } from "./flagEmoji";
import { Button } from "@mui/material";
import * as htmlToImage from "html-to-image";

export const Emojifier = () => {
  const [filename, setFilename] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      setFilename(file.name.split(".")[0]);

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;

        const blob = new Blob([reader.result]);
        const url = URL.createObjectURL(blob);

        flagEmoji(url, document.getElementById("destCanvas"));
      };

      console.log(file);
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
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
              link.download = `${filename}-emoji.png`;
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
};
