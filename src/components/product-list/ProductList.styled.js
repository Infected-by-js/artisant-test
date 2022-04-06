import styled from 'styled-components';
import {deviceMinWidth} from '../../assets/styles/constants';

export const ProductList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: space-between;

  @media ${deviceMinWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ProductItem = styled.li``;
