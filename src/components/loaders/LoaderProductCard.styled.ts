import styled from 'styled-components';
import {color} from '../../helpers/constants';

interface ContainerProps {
  isShow: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({isShow}) => (isShow ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  border: none;
  background-color: ${color.stroke};

  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s linear;
`;
