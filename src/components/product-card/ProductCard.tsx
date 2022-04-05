import {imagesUrl} from '../../api/endpoints';
import type {Product} from '../../types/Product';
import * as S from './ProductCard.styled';

const isVideo = (src: string): boolean => {
  return src.endsWith('.mp4');
};

// FIXME: need to add lazy loading image component

export const ProductCard = (props: Product) => {
  const {fileName, author, name, quantity, quantityTotal, price} = props;

  const Preview = ({src}: {src: string}) => {
    return isVideo(fileName) ? <S.Video src={src} /> : <S.Image src={src} />;
  };

  return (
    <S.Card>
      <S.CardTop>
        <Preview src={`${imagesUrl}/${fileName}`} />
        <S.Author>
          created by
          <S.NameLink href="/userId">{author}</S.NameLink>
        </S.Author>
        <S.Title>{name}</S.Title>
      </S.CardTop>
      <S.CardBottom>
        <S.Available>
          <S.Text>available</S.Text>
          <S.AvailableCount>
            {quantity} of {quantityTotal}
          </S.AvailableCount>
        </S.Available>
        <S.Price>
          <S.Text>price</S.Text>
          <S.PriceCount>{price} ETH</S.PriceCount>
        </S.Price>
      </S.CardBottom>
    </S.Card>
  );
};
