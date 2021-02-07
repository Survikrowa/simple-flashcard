import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage-state";
import clsx from "clsx";
import styles from "./Menu.module.scss";

type Flashcard = {
  title: string;
  description: string;
  difficulty: string;
};

export const Menu = () => {
  const [flashcards] = useLocalStorage<Flashcard[]>("flashcards");

  const customFlashcards =
    flashcards &&
    flashcards
      .filter((e) => e.title)
      .map((flashcard, i) => (
        <Link
          to={`/flashcards/${i + 1}`}
          className={styles.customFlashcards}
          key={flashcard.title + i}
        >
          <div
            className={clsx(styles[flashcard.difficulty], styles.difficultyBox)}
          ></div>
          <div className={styles.menuText}>
            <span className={styles.title}>{flashcard.title}</span>
            <span className={styles.description}>{flashcard.description}</span>
          </div>
        </Link>
      ));

  return <div className={styles.menu}>{customFlashcards}</div>;
};
