import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNames?: string;
  variant: "btn-primary" | "btn-secondary";
  backgroundColor?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  classNames,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const styles = `${variant} ${classNames}`;
  return (
    <button {...props} className={styles} style={{ backgroundColor }}>
      {children}
    </button>
  );
};
