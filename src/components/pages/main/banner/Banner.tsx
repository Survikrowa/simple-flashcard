import { Link } from "react-router-dom";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <span>Nauka nie musi być trudna!</span>
        <span>Ucz się 5 minut dziennie, a osiągniesz swój cel.</span>
      </div>
      <Link to="/newset" className={styles.link}>
        Dodaj zestaw
      </Link>
    </div>
  );
};
