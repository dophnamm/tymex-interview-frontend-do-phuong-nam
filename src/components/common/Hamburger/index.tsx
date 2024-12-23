import { useNavigate } from "react-router-dom";
import { motion, Variants, useCycle } from "framer-motion";

import { navItems } from "@/utils/constant";

import { MenuToggle } from "./components/MenuToggle";

import styles from "./styles.module.scss";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Hamburger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    toggleOpen();
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`${styles.hamburger} relative`}
    >
      <MenuToggle toggle={() => toggleOpen()} />

      <motion.ul
        className="bg-nav rounded px-4 py-2 absolute mt-1"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 4px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(50% 50% 90% 50% round 4px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {navItems.map((nav) => {
          const { id, path, label } = nav;
          const active = path === location.pathname ? "active" : "";

          return (
            <motion.li
              key={id}
              variants={itemVariants}
              onClick={() => handleNavigate(path)}
              className="py-2 font-drone-ranger"
            >
              <motion.p className={active}>{label}</motion.p>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default Hamburger;
