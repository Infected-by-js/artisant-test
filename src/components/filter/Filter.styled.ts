import styled from 'styled-components';
import {fontWeight, color, deviceMinWidth} from '../../assets/styles/constants';

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media ${deviceMinWidth.tablet} {
    align-items: flex-end;
    flex-direction: column;
  }
`;

export const Text = styled.div`
  font-weight: ${fontWeight.regular};
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: 0.01em;

  color: ${color.grey};
`;

export const Label = styled.label`
  padding: 10px;
  text-align: center;
  font-weight: ${fontWeight.bold};
  font-size: 0.875rem;
  line-height: 1;
  color: ${color.black};
  background-color: ${color.white};
  border: 1px solid ${color.black};
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: ${color.white};
    background-color: ${color.black};
  }
`;

export const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  visibility: hidden;
  width: 0;
  height: 0;
`;
