import useLocalStorage from "use-local-storage-state";
import { useParams } from "react-router-dom";
import { Header } from "../../components/pages/presetFlashcard/header/Header";
import { Footer } from "../../components/pages/presetFlashcard/footer/Footer";
import styles from "./CustomFlashcards.module.scss";
import { FlashcardsSlider } from "../../components/flashcardsSlider/FlashcardsSlider";

type URLParams = {
  id: string;
};

type Flashcard = {
  title: string;
  description: string;
  difficulty: string;
  flashcards: FlashcardsData[];
}[];

type FlashcardsData = {
  term: string;
  description: string;
};

export const CustomFlashcards = () => {
  const { id } = useParams<URLParams>();
  const [flashcards] = useLocalStorage<Flashcard>("flashcards");
  console.log(flashcards);
  const flashcardsData = flashcards && flashcards?.[parseInt(id)].flashcards;
  return (
    <main className={styles.main}>
      <Header />
      <FlashcardsSlider flashcardsData={flashcardsData} />
      <Footer />
    </main>
  );
};
