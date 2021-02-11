import useLocalStorage from "use-local-storage-state";
import { useParams } from "react-router-dom";
import { FlashcardsSlider } from "../../components/flashcardsSlider/FlashcardsSlider";
import { FlashcardsContainer } from "../../components/flashcardsContainer/FlashcardsContainer";

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
  const flashcardsData = flashcards && flashcards?.[parseInt(id)].flashcards;
  return (
    <FlashcardsContainer>
      <FlashcardsSlider flashcardsData={flashcardsData} />
    </FlashcardsContainer>
  );
};
