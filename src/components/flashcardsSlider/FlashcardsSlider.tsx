import { useState, useCallback } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flashcard } from "../flashcard/Flashcard";
import clsx from "clsx";
import styles from "./FlashcardsSlider.module.scss";

SwiperCore.use([Navigation]);

type SliderProps = {
  flashcardsData: flashcards[];
};

type flashcards = {
  term: string;
  description: string;
};

export const FlashcardsSlider = ({ flashcardsData }: SliderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [definiton, setDefinition] = useState<string | null>(null);

  const handleShowDefinitionButton = useCallback((definiton: string | null) => {
    setDefinition(definiton);
    setIsVisible((prevState) => !prevState);
  }, []);
  const flashcards = flashcardsData.map(({ term, description }, i) => (
    <SwiperSlide key={term + i} className={styles.swiperSlide}>
      <Flashcard
        term={term}
        definition={description}
        showDefinitonHandler={handleShowDefinitionButton}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => setIsVisible(false)}
        className={styles.flashcardsContainer}
        centeredSlides
        centeredSlidesBounds
        navigation
      >
        {flashcards}
      </Swiper>
      <div
        className={clsx(
          `${styles.definiton}`,
          isVisible && `${styles.visible}`
        )}
      >
        {definiton}
      </div>
    </>
  );
};
