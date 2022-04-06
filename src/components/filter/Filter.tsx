import {FC} from 'react';
import * as S from './Filter.styled';

type Props = {
  isAvailable: boolean;
  onPage: number;
  total: number;
  handleToggleAvailable: () => void;
};

export const Filter: FC<Props> = (props) => {
  const {isAvailable, onPage, total, handleToggleAvailable} = props;

  return (
    <S.Filter>
      <S.Text>
        Products on page: {onPage} of {total}
      </S.Text>
      <S.Label>
        {isAvailable ? 'show all' : 'hide unavailable'}
        <S.HiddenCheckbox
          checked={isAvailable}
          onChange={handleToggleAvailable}
        />
      </S.Label>
    </S.Filter>
  );
};
