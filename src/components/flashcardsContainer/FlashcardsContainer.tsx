import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import styles from "./FlashcardsContainer.module.scss";

type FlashcardsContainerProps = {
  children: React.ReactNode;
};

export const FlashcardsContainer = ({ children }: FlashcardsContainerProps) => {
  return (
    <main className={styles.main}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
