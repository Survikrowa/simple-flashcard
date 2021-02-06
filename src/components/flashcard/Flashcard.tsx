import styles from "./Flashcard.module.scss";

type FlashcardProps = {
  term: string;
  definition: string;
  showDefinitonHandler: (definiton: string | null) => void;
};

export const Flashcard = ({
  term,
  definition,
  showDefinitonHandler,
}: FlashcardProps) => {
  return (
    <>
      <div className={styles.flashcardContainer}>
        <div className={styles.flashcard}>
          <span className={styles.term}>{term}</span>
        </div>
      </div>
      <button
        className={styles.flashcardButton}
        onClick={() => showDefinitonHandler(definition)}
      >
        <span>Show definition</span>
      </button>
    </>
  );
};
