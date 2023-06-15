import { HTMLAttributes, ReactNode } from "react";
import "./Button.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant:
    | "btn-primary"
    | "btn-secondary"
    | "btn-tertiary"
    | "btn-danger"
    | "btn-search-filter"
    | "btn-accept";
  backgroundColor?: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  size,
  className,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const styles = [className, variant, size].join(" ");
  return (
    <button {...props} className={styles} style={{ backgroundColor }}>
      {children}
    </button>
  );
};
