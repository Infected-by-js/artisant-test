import {FC, useState} from 'react';
import {FileType} from '../../types/File';
import {LoaderProductCard} from '../loaders/LoaderProductCard';
import * as S from './LazyFile.styled';

type Props = {
  src: string;
  fileType: FileType;
  setIsFileLoaded?: (prop: boolean) => void;
};

export const LazyFile: FC<Props> = (props) => {
  const {src, fileType, setIsFileLoaded = () => {}} = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  if (isError) {
    return <h3>Invalid file...</h3>;
  }

  const handleFileLoaded = () => {
    setIsLoaded(true);
    setIsFileLoaded(true);
  };

  return (
    <>
      {fileType === 'img' ? (
        <S.Image
          onLoad={handleFileLoaded}
          src={src}
          onError={() => setIsError(true)}
        />
      ) : (
        <S.Video
          onLoadedData={handleFileLoaded}
          src={src}
          onError={() => setIsError(true)}
        />
      )}

      <LoaderProductCard isShow={!isLoaded} />
    </>
  );
};
