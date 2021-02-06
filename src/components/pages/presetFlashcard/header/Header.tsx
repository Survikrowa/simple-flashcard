import { Link } from "react-router-dom";
import { NavigationArrow } from "../../../svg/NavigationArrow";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <NavigationArrow left color="white" />
      </Link>
      Nauka z fiszek
    </header>
  );
};
