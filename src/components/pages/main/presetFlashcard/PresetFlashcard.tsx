import { Link } from "react-router-dom";
import styles from "./PresetFlashcard.module.scss";

type PresetFlashcardProps = {
  title: string;
  description: string;
  index: number;
};

export const PresetFlashcard = ({
  title,
  description,
  index,
}: PresetFlashcardProps) => {
  return (
    <Link to={`presetfc/${index}`} className={styles.link}>
      <div className={styles.flashcardText}>
        <span>{title}</span>
        <span>{description}</span>
      </div>
    </Link>
  );
};
