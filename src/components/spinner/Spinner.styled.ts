import styled from 'styled-components';
import {color} from '../../helpers/constants';

export const Spinner = styled.span`
  display: 'block';
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-top: 6px solid ${color.darkBlue};
  border-right: 6px solid transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
