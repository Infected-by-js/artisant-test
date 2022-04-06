import styled from 'styled-components';
import {color, fontWeight} from '../../helpers/constants';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-weight: ${fontWeight.semiBold};
  font-size: 2rem;
  line-height: 1.3;
  color: ${color.black};
`;
export const Button = styled.button`
  padding: 1rem;
  margin-bottom: 2rem;
  font-weight: ${fontWeight.semiBold};
  font-size: 1.5rem;
  line-height: 1;
  color: ${color.black};
  background-color: transparent;
  border: 2px solid ${color.black};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: ${color.white};
      background-color: ${color.black};
    }
  }
`;
