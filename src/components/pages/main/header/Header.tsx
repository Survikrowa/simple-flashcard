import { useState } from "react";
import { FlashcardsIcon } from "../../../svg/FlashcardsIcon";
import { Logo } from "../../../svg/Logo";
import { Menu } from "../menu/Menu";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleShowMenuButton = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.iconContainer} onClick={handleShowMenuButton}>
        <FlashcardsIcon />
        <span>Stworzone zestawy</span>
      </div>
      <h1>
        <Logo />
      </h1>
      {isVisible && <Menu />}
    </header>
  );
};
