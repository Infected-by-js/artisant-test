import styled from 'styled-components';
import {color} from '../../helpers/constants';

export const Container = styled.div`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  transition: opacity 0.3s ease, background-color 0.3s ease;
`;
