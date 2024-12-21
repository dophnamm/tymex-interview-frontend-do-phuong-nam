import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Row, Col, Button } from "antd";

import WorldIcon from "@/components/Icons/WorldIcon";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";

import { navItems } from "@/utils/constant";

import styles from "./styles.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div
      ref={ref}
      className="bg-nav absolute w-full top-0 left-0 z-[9999]"
      style={{
        transform: isInView ? "none" : "translateY(-24px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className="py-[22px] mx-[164px]">
        <Row align="middle" justify="space-between">
          <Col>
            <nav id="navigation" className={styles.headerNav}>
              <ul className="flex gap-[60px]">
                {navItems.map((nav) => {
                  const { id, path, label } = nav;
                  const active = path === location.pathname ? "active" : "";

                  return (
                    <li
                      key={id}
                      onClick={() => {
                        handleNavigation(path);
                      }}
                    >
                      <motion.p className={active}>{label}</motion.p>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>

          <Col>
            <Row align="middle" gutter={40}>
              <Col>
                <Button
                  size="large"
                  type="primary"
                  className="text-base font-semibold"
                >
                  Connect Wallet
                </Button>
              </Col>

              <Col>
                <Row align="middle" gutter={8}>
                  <Col>
                    <Button type="text" className="!p-0 h-fit">
                      <WorldIcon />
                    </Button>
                  </Col>

                  <Col>
                    <Button type="text" className="!p-0 h-fit">
                      <ChevronDownIcon />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
