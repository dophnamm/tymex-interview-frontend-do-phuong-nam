import { createContext } from "react";
import {} from "antd";
import { NotificationInstance } from "antd/es/notification/interface";

export interface INotification {
  api?: NotificationInstance;
}

export const NotificationContext = createContext<INotification>({});
