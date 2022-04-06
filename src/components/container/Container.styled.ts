import styled from 'styled-components';
import {deviceMinWidth, size} from '../../helpers/constants';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media ${deviceMinWidth.mobile} {
    max-width: ${size.mobile};
  }
  @media ${deviceMinWidth.tablet} {
    max-width: ${size.tablet};
  }
  @media ${deviceMinWidth.laptop} {
    max-width: ${size.laptop};
    padding: 0 2rem;
  }
  @media ${deviceMinWidth.desktop} {
    max-width: ${size.desktop};
  }
`;
