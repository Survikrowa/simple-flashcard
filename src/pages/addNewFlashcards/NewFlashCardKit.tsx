import { AddFlashcardsForm } from "../../components/addNewFlashcards/forms/AddFlashcardsForm";
import { Header } from "../../components/addNewFlashcards/header/Header";
import styles from "./NewFlashCardKit.module.scss";

export const NewSet = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <AddFlashcardsForm />
        </main>
      </div>
    </>
  );
};
