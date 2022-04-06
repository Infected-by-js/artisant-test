import {FC} from 'react';
import * as S from './Filter.styled';

type Props = {
  isAvailable: boolean;
  showed: number;
  total: number;
  handleToggleAvailable: () => void;
};

export const Filter: FC<Props> = (props) => {
  const {isAvailable, showed, total, handleToggleAvailable} = props;

  return (
    <S.Filter>
      <S.Text>
        Products on page: {showed} of {total}
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
