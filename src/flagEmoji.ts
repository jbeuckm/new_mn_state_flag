// @ts-nocheck

export const flagEmoji = (
  imageDataUrl: string,
  destCanvas: HTMLCanvasElement
) => {
  const sourceImg = new Image();
  sourceImg.width = 500;
  sourceImg.height = 300;

  sourceImg.onload = () => {
    console.log("sourceImg", sourceImg.width, sourceImg.height);

    const sourceCanvas = new OffscreenCanvas(sourceImg.width, sourceImg.height);
    const sourceCtx = sourceCanvas.getContext("2d");
    sourceCtx.drawImage(sourceImg, 0, 0, sourceImg.width, sourceImg.height);

    const squareSize = Math.max(sourceImg.width, sourceImg.height);

    const padding = { height: 0, width: 0 };

    if (sourceImg.width > sourceImg.height) {
      padding.height = (sourceImg.width - sourceImg.height) / 2;
    } else {
      padding.width = (sourceImg.height - sourceImg.width) / 2;
    }

    const canvas = new OffscreenCanvas(500, 500);
    const canvasCtx = canvas.getContext("2d");

    // Displacement parameters
    const amplitude = 15; // Adjust the amplitude of the sine wave
    const frequency = (2 * Math.PI) / sourceImg.width; // Adjust the frequency of the sine wave

    // Apply vertical sine wave displacement
    for (let x = 0; x < sourceImg.width; x++) {
      const yOffset = Math.sin(x * frequency) * amplitude;

      const col = sourceCtx.getImageData(x, 0, 1, sourceImg.height);
      canvasCtx.putImageData(col, padding.width + x, padding.height + yOffset);
    }

    const destCtx = destCanvas.getContext("2d");
    destCtx?.putImageData(canvasCtx?.getImageData(0, 0, 500, 500), 0, 0);
  };

  sourceImg.src = imageDataUrl;
};
