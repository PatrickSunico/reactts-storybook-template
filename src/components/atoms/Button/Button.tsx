import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant: "btn-primary" | "btn-secondary" | "btn-tertiary";
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
  console.log(className);
  const styles = `${variant} ${className}`;
  return (
    <button {...props} className={styles} style={{ backgroundColor }}>
      {children}
    </button>
  );
};
