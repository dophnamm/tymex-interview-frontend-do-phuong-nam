import { ReactNode } from "react";
import { Layout } from "antd";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

interface IProps {
  children: ReactNode;
}

export const CommonLayout = (props: IProps) => {
  const { children } = props;

  return (
    <Layout className="min-h-screen bg-white">
      <div className="flex flex-auto flex-col">
        <Header />

        <div className="flex-auto">{children}</div>

        <Footer />
      </div>
    </Layout>
  );
};
