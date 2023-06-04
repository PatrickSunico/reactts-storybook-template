import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "btn-primary" | "btn-secondary";
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  console.log(variant);
  return (
    <button
      {...props}
      className={variant}
    >
      {children}
    </button>
  );
};
