import { ReactNode } from "react";
import { notification } from "antd";

import { NotificationContext } from "./NotificationContext";

interface IProps {
  children?: ReactNode;
}

export const NotificationProvider = (props: IProps) => {
  const { children } = props;
  const [api, contextHolder] = notification.useNotification({
    top: 100,
    maxCount: 5,
  });

  return (
    <NotificationContext.Provider value={{ api }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
