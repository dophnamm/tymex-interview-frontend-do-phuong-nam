import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: "Inter, sans-serif",
  },

  components: {
    Button: {
      borderRadius: 4,
      borderRadiusLG: 4,
      paddingInlineLG: 20,
      defaultHoverColor: "initial",
    },
  },
};

export default theme;
