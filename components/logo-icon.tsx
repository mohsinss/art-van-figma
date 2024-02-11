import type { NextPage } from "next";
import styles from "./logo-icon.module.css";

const LogoIcon: NextPage = () => {
  return (
    <img className={styles.logoIcon} loading="eager" alt="" src="/logo1.svg" />
  );
};

export default LogoIcon;
