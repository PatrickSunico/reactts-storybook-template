import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';

}

export const Button = ({children, ...props}:ButtonProps) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}
