import { Link } from "react-router-dom";
import { Arrow } from "../../../svg/Arrow";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Arrow />
      </Link>
      Tworzenie nowego zestawu
    </header>
  );
};
