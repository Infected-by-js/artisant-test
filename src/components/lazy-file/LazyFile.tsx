import {FC, useState} from 'react';
import {FileType} from '../../types/File';
import {LoaderProductCard} from '../loaders/LoaderProductCard';
import * as S from './LazyFile.styled';

type Props = {
  src: string;
  fileType: FileType;
};

export const LazyFile: FC<Props> = ({src, fileType}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  if (isError) {
    return <h3>Invalid file...</h3>;
  }

  return (
    <>
      {fileType === 'img' ? (
        <S.Image
          onLoad={() => setIsLoaded(true)}
          src={src}
          onError={() => setIsError(true)}
        />
      ) : (
        <S.Video
          onLoadedData={() => setIsLoaded(true)}
          src={src}
          onError={() => setIsError(true)}
        />
      )}

      <LoaderProductCard isShow={!isLoaded} />
    </>
  );
};
