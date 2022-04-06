import {FC} from 'react';
import {Spinner} from '../spinner/Spinner';
import {useVisible} from '../../hooks/useVisible';
import * as S from './LoaderPage.styled';

type Props = {
  isShow: boolean;
};

export const LoaderPage: FC<Props> = ({isShow}) => {
  const {elRef, isShowEl} = useVisible(isShow);

  if (!isShowEl) {
    return null;
  }

  return (
    <S.Container ref={elRef}>
      <Spinner />
    </S.Container>
  );
};
