import styled from 'styled-components';
import {deviceMinWidth} from '../../helpers/constants';

export const PageContainer = styled.div`
  margin: 1rem auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${deviceMinWidth.tablet} {
    margin: 2rem auto;
  }
`;
