import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  role?: "primary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  type = "button",
  role = "primary",
  onClick = () => {},
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[role])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
