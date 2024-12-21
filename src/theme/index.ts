import { ThemeConfig } from "antd";

import colors from "./colors";

const theme: ThemeConfig = {
  token: {
    fontFamily: "'Inter', sans-serif",
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
      colorText: colors.white,
      borderRadiusLG: 4,
    },
  },
};

export default theme;
