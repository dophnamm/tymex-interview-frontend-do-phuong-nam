import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

import theme from "@/theme";

export const AntdThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
