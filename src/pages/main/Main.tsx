import { Link } from "react-router-dom";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <>
      <main className={styles.background}>
        <span>
          Nauka nie musi być trudna! Ucz się 5 minut dziennie, a osiągniesz swój
          cel.
        </span>
        <div>
          <Link to="/newset">TWORZE ZESTAW TUTAJ</Link>
          <span>Stwórz zestaw</span>
        </div>
      </main>
    </>
  );
};
