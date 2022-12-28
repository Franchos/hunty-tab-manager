import React, { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

export interface ColorPickedData {
  rgb: string;
  rgba: string;
  hex: string;
  hexa: string;
  value: number[];
  isDark: boolean;
  isLight: boolean;
}

interface ColorPickedState {
  data: ColorPickedData;
  error: boolean;
}

type UseColorPicked = (image: string) => { data: ColorPickedData };

const colorPicked: UseColorPicked = (image) => {
  const [colorPicked, setColorPicked] = useState<ColorPickedState>({
    data: {
      rgb: "",
      rgba: "",
      hex: "",
      hexa: "",
      value: [0],
      isDark: false,
      isLight: false,
    },
    error: false,
  });
  const fac = new FastAverageColor();

  useEffect(() => {
    fac
      .getColorAsync(image, { algorithm: "simple" })
      .then((color) => {
        setColorPicked({ data: color, error: false });
      })
      .catch((error) => {
        setColorPicked({ data: error, error: true });
      });
  }, [setColorPicked]);

  return colorPicked;
};

export default colorPicked;
