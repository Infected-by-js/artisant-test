import styled from 'styled-components';

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

  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s linear;
`;
