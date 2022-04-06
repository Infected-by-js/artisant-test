import {FC} from 'react';
import * as S from './PageError.styled';

type Props = {
  error: string;
  handleBack: () => void;
};

export const PageError: FC<Props> = ({error, handleBack}) => {
  return (
    <S.PageContainer>
      <S.Button onClick={handleBack}>Back to home</S.Button>
      <S.Title>{error}</S.Title>
    </S.PageContainer>
  );
};
