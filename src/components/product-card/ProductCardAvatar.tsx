import {FC, useState} from 'react';
import {LazyFile} from '../lazy-file/LazyFile';
import {filesUrl} from '../../api/endpoints';
import * as S from './ProductCard.styled';

type Props = {
  avatarName: string;
  autorName: string;
  title: string;
  isInViewport: boolean;
};

export const ProductCardAvatar: FC<Props> = (props) => {
  const {avatarName, autorName, title, isInViewport} = props;
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  const fileSrc = `${filesUrl}/${avatarName}`;
  const isVideo = avatarName.endsWith('.mp4');

  const File = () =>
    isVideo ? (
      <LazyFile
        src={fileSrc}
        fileType="video"
        setIsFileLoaded={setIsFileLoaded}
      />
    ) : (
      <LazyFile
        src={fileSrc}
        fileType="img"
        setIsFileLoaded={setIsFileLoaded}
      />
    );

  return (
    <S.CardTop textColor={isFileLoaded ? 'white' : 'black'}>
      {isInViewport && File()}
      <S.Author>
        created by <S.NameLink href="#">{autorName}</S.NameLink>
      </S.Author>

      <S.Title>{title}</S.Title>
    </S.CardTop>
  );
};
