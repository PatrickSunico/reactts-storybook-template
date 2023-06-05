import { HTMLAttributes, ReactNode } from "react";
import "./Container.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  return <div {...props}>{children}</div>;
};
