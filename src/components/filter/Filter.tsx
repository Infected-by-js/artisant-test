import * as S from './Filter.styled';

type Props = {
  isHiddenOutOfStock: boolean;
  onHideOutOfStock: () => void;
};

export const Filter = ({isHiddenOutOfStock, onHideOutOfStock}: Props) => {
  return (
    <S.Filter>
      <label>
        {isHiddenOutOfStock ? 'Show All' : 'Hide Out-Of-Stock'}
        <input
          type="checkbox"
          checked={isHiddenOutOfStock}
          onChange={onHideOutOfStock}
        />
      </label>
    </S.Filter>
  );
};
