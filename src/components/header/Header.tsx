import { Container } from "../container/Container";
import * as S from "./Header.styled";

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Title>Explore</S.Title>
        <S.Description>Buy and sell digital fashion NFT art</S.Description>
      </Container>
    </S.Header>
  );
};
