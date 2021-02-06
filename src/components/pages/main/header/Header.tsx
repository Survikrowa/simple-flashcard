import { useState } from "react";
import useLocalStorage from "use-local-storage-state";
import { FlashcardsIcon } from "../../../svg/FlashcardsIcon";
import { Link } from "react-router-dom";
import { Logo } from "../../../svg/Logo";
import styles from "./Header.module.scss";
import clsx from "clsx";

type Flashcard = {
  title: string;
  description: string;
  difficulty: string;
};

export const Header = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [flashcards] = useLocalStorage<Flashcard[]>("flashcards");

  const handleShowMenuButton = () => {
    setVisible((prevState) => !prevState);
  };

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
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer} onClick={handleShowMenuButton}>
        <FlashcardsIcon />
        <span>Stworzone zestawy</span>
      </div>
      <h1>
        <Logo />
      </h1>
      {isVisible && <div className={styles.menu}>{customFlashcards}</div>}
    </header>
  );
};
