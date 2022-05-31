import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./Button.styled";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: FC<Props> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
