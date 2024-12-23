import { ThemeConfig } from "antd";

import colors from "./colors";

const theme: ThemeConfig = {
  token: {
    fontFamily: "'Inter', sans-serif",

    // Mobile
    screenXS: 767,
    screenXSMin: 767,
    screenXSMax: 767,
    screenSM: 767,
    screenSMMin: 767,
    screenSMMax: 767,

    // Tablet
    screenMD: 768,
    screenMDMin: 768,
    screenMDMax: 1278,
    screenLGMin: 1279,
    screenLG: 1279,
    screenLGMax: 1279,

    // Desktop
    screenXL: 1280,
    screenXLMin: 1280,
    screenXLMax: 1599,
    screenXXL: 1600,
    screenXXLMin: 1600,
  },

  components: {
    Button: {
      borderRadius: 4,
      borderRadiusLG: 4,
      paddingInlineLG: 20,
      defaultHoverColor: "initial",
    },

    Input: {
      colorBgContainer: "transparent",
      hoverBorderColor: colors.pink[100],
      activeBorderColor: colors.pink[100],
      colorTextPlaceholder: colors.grey[100],
      colorBorder: colors.grey[100],
      colorText: colors.white,
      borderRadiusLG: 4,
    },

    Select: {
      colorBgContainer: "transparent",
      hoverBorderColor: colors.pink[100],
      activeBorderColor: colors.pink[100],
      colorTextPlaceholder: colors.grey[100],
      colorBorder: colors.grey[100],
      colorText: colors.white,
      borderRadiusLG: 4,
    },

    Slider: {
      railSize: 8,
    },
  },
};

export default theme;
