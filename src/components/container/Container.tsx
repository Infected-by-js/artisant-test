import { FC } from "react";
import { StyledContainer } from "./Container.styled";

export const Container: FC = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
