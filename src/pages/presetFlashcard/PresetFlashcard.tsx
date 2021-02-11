import { useParams } from "react-router-dom";

import { flashcardsData } from "../../flashcardsData/flashcardsData";
import { FlashcardsSlider } from "../../components/flashcardsSlider/FlashcardsSlider";
import { FlashcardsContainer } from "../../components/flashcardsContainer/FlashcardsContainer";

type URLParams = {
  id: string;
};

export const PresetFlashcard = () => {
  const { id } = useParams<URLParams>();

  const flashcards = flashcardsData[parseInt(id)].flashcards;
  return (
    <FlashcardsContainer>
      <FlashcardsSlider flashcardsData={flashcards} />;
    </FlashcardsContainer>
  );
};
