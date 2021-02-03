import { Link } from "react-router-dom";
import { useMessageState } from "../../hooks/useMessage";
import styles from "./Main.module.scss";

export const Main = () => {
  const message = useMessageState();

  return (
    <>
      <main className={styles.background}>
        {message && message.message}
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
