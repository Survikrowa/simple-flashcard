import { flashcardsData } from "../../../../flashcardsData/flashcardsData";
import { PresetFlashcard } from "../presetFlashcard/PresetFlashcard";
import styles from "./PresetFlashcardKits.module.scss";

export const PresetFlashcardKits = () => {
  const renderFlashcardKits = flashcardsData.map(
    ({ title, description }, i) => {
      return (
        <PresetFlashcard
          title={title}
          description={description}
          key={i}
          index={i}
        />
      );
    }
  );

  return (
    <div className={styles.flashcardsContainer}>{renderFlashcardKits}</div>
  );
};
