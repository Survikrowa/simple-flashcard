import { useParams } from "react-router-dom";
import { Header } from "../../components/pages/presetFlashcard/header/Header";
import { Footer } from "../../components/pages/presetFlashcard/footer/Footer";
import styles from "./PresetFlashcard.module.scss";
import { flashcardsData } from "../../flashcardsData/flashcardsData";
import { FlashcardsSlider } from "../../components/flashcardsSlider/FlashcardsSlider";

type URLParams = {
  id: string;
};

export const PresetFlashcard = () => {
  const { id } = useParams<URLParams>();

  const flashcards = flashcardsData[parseInt(id)].flashcards;
  return (
    <main className={styles.main}>
      <Header />
      <FlashcardsSlider flashcardsData={flashcards} />
      <Footer />
    </main>
  );
};
