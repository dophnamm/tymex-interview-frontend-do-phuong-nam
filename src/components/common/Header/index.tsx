import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Row, Col, Button } from "antd";

import { resources } from "@/providers";

import WorldIcon from "@/components/Icons/WorldIcon";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";

import styles from "./styles.module.scss";

const navItems = [
  {
    id: "home",
    path: resources.home,
    label: "Home",
  },
  {
    id: "aboutUs",
    path: resources.aboutUs,
    label: "About US",
  },
  {
    id: "ourTeams",
    path: resources.ourTeams,
    label: "Our Teams",
  },
  {
    id: "marketplace",
    path: resources.marketplace,
    label: "Marketplace",
  },
  {
    id: "roadmap",
    path: resources.roadmap,
    label: "Roadmap",
  },
  {
    id: "whitepaper",
    path: resources.whitepaper,
    label: "Whitepaper",
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-nav absolute w-full top-0 left-0">
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
