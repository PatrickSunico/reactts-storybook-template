import { HTMLAttributes, ReactNode } from "react";

export interface MainParent extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const MainParent = ({ children, ...props }: MainParent) => {
  return <main {...props}>{children}</main>;
};
