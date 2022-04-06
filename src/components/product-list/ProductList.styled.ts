import styled from 'styled-components';
import {deviceMinWidth} from '../../helpers/constants';

export const ProductList = styled.ul`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;

  @media ${deviceMinWidth.tablet} {
    grid-template-columns: repeat(2, auto);
    row-gap: 3.5rem;
  }

  @media ${deviceMinWidth.laptop} {
    grid-template-columns: repeat(3, auto);
    row-gap: 3rem;
  }

  @media ${deviceMinWidth.desktop} {
    grid-template-columns: repeat(4, auto);
    row-gap: 2rem;
  }
`;

export const ProductItem = styled.li``;
