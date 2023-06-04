import { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  return <div {...props}>{children}</div>;
};
