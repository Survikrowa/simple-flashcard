import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flashcard } from "../../components/presetFlashcard/flashcard/Flashcard";
import { flashcardsData } from "../../flashcardsData/flashcardsData";
import { Header } from "../../components/presetFlashcard/header/Header";
import { Footer } from "../../components/presetFlashcard/footer/Footer";
import styles from "./PresetFlashcard.module.scss";
import clsx from "clsx";

type URLParams = {
  id: string;
};

SwiperCore.use([Navigation]);

export const PresetFlashcard = () => {
  const { id } = useParams<URLParams>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [definiton, setDefinition] = useState<string | null>(null);

  const handleShowDefinitionButton = useCallback((definiton: string | null) => {
    setDefinition(definiton);
    setIsVisible((prevState) => !prevState);
  }, []);

  const flashcards = flashcardsData[parseInt(id)].flashcards.map(
    ({ term, description }, i) => (
      <SwiperSlide key={term + i} className={styles.swiperSlide}>
        <Flashcard
          term={term}
          definition={description}
          showDefinitonHandler={handleShowDefinitionButton}
        />
      </SwiperSlide>
    )
  );
  return (
    <main className={styles.main}>
      <Header />

      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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

      <Footer />
    </main>
  );
};
