import { ReactNode } from "react";
import { Layout } from "antd";
import { useRef } from "react";
import { useInView } from "framer-motion";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import mainBg from "@/assets/images/main-bg.png";

interface IProps {
  children: ReactNode;
}

export const CommonLayout = (props: IProps) => {
  const { children } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Layout
      className="min-h-screen bg-color-primary"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <div className="flex flex-auto flex-col">
        <Header />

        <div
          ref={ref}
          className="flex-auto"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {children}
        </div>

        <Footer />
      </div>
    </Layout>
  );
};
