import styled from "styled-components";
import { color, fontWeight } from "../../assets/styles/constants";

export const Header = styled.header`
  margin-bottom: 32px;
`;
export const Title = styled.h1`
  margin-bottom: 24px;
  font-weight: ${fontWeight.bold};
  font-size: 2rem;
  line-height: 1;
  color: ${color.black};
`;
export const Description = styled.p`
  font-weight: ${fontWeight.regular};
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${color.grey};
`;
