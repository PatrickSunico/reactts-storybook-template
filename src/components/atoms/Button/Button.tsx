import { HTMLAttributes, ReactNode } from "react";
import "./Button.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  className,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const styles = [className, variant].join(" ");

  return (
    <button {...props} className={styles} style={{ backgroundColor }}>
      {children}
    </button>
  );
};
