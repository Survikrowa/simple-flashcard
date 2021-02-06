import { Logo } from "../../../svg/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Logo />
      </h1>
    </header>
  );
};
