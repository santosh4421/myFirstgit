import React, { useState } from "react";

function PixelToRemConverter() {
  const [pixelValue, setPixelValue] = useState("");
  const [remValue, setRemValue] = useState("");

  function convertPixelToRem() {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const rem = parseFloat(pixelValue) / 16;
    setRemValue(rem.toFixed(2));
  }

  return (
    <div>
      <h2>Pixel to Rem Converter</h2>
      <label htmlFor="pixelInput">Pixel Value:</label>
      <input
        id="pixelInput"
        type="number"
        value={pixelValue}
        onChange={(event) => setPixelValue(event.target.value)}
      />
      <button onClick={convertPixelToRem}>Convert</button>
      <p>Rem Value: {remValue}</p>
    </div>
  );
}

export default PixelToRemConverter;
