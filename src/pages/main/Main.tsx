import { Banner } from "../../components/pages/main/banner/Banner";
import { Header } from "../../components/pages/main/header/Header";
import { PresetFlashcardKits } from "../../components/pages/main/presetFlashcardKits/PresetFlashcardKits";
import { useMessageState } from "../../hooks/useMessage";
import styles from "./Main.module.scss";

export const Main = () => {
  const message = useMessageState();
  return (
    <>
      <Header />
      <main className={styles.background}>
        {message && message.message}
        <Banner />
        <div className={styles.container}>
          <span className={styles.line}>LUB</span>
        </div>
        <PresetFlashcardKits />
      </main>
    </>
  );
};
