import { Logo } from "../../../svg/Logo";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};
