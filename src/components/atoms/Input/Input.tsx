import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  classNames: string;
}

export const Input = ({ label, classNames, ...props }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    //   onChange(event.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <input {...props} type="text" onChange={handleChange} />
    </>
  );
};
