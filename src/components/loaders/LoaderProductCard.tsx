import {FC} from 'react';
import {Spinner} from '../spinner/Spinner';
import * as S from './LoaderProductCard.styled';

type Props = {
  isShow: boolean;
};

export const LoaderProductCard: FC<Props> = ({isShow}) => {
  if (!isShow) {
    return null;
  }

  return (
    <S.Container isShow={isShow}>
      <Spinner />
    </S.Container>
  );
};
