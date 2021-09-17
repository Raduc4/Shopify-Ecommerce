import React, { ButtonHTMLAttributes, FC } from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
}
const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(s.root, className)} {...rest} type="button">
      {children}
    </button>
  );
};

export default Button;
