import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#038C33",
  primaryDark: "#038C33",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#038C33",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f8f1cd",
  backgroundDisabled: "#fbf7e3",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#038C33",
  textDisabled: "#BDC2C4",
  textSubtle: "#04be45",
  borderColor: "#e9d35d",
  card: "#F2E5A0",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#191326",
  background: "#f8f1cd",
  backgroundDisabled: "#fbf7e3",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  primaryDark: "#EFF4F5",
  tertiary: "#EFF4F5",
  text: "#038C33",
  textDisabled: "#BDC2C4",
  textSubtle: "#04be45",
  borderColor: "#e9d35d",
  card: "#F2E5A0",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
