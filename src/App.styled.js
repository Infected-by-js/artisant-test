import styled from 'styled-components';
import {deviceMinWidth} from './assets/styles/constants';

export const AppContent = styled.div`
  margin: 1rem auto;
  width: 100%;

  @media ${deviceMinWidth.tablet} {
    margin: 2rem auto;
  }
`;
export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${deviceMinWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ProductItem = styled.li``;
