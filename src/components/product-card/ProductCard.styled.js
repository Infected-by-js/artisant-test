import styled from 'styled-components';
import {color, fontWeight, deviceMinWidth} from '../../assets/styles/constants';

export const Card = styled.div.attrs({
  tabIndex: 0,
})`
  display: flex;
  flex-direction: column;
  width: 285px;
  height: 482px;
  border-radius: 8px;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);

  overflow: hidden;
  transform: translateY(0);
  transition: transform 200ms ease, box-shadow 100ms 100ms ease;
  cursor: pointer;

  &:hover,
  &:focus-within {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.12);
  }

  @media ${deviceMinWidth.tablet} {
    width: 305px;
  }
`;

export const CardTop = styled.div`
  position: relative;
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img.attrs({
  alt: 'product',
  decoding: 'async',
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const Video = styled.video.attrs({
  loop: true,
  muted: true,
  autoPlay: true,
  type: 'video/mp4',
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const Author = styled.p`
  display: inline-grid;
  width: fit-content;
  position: relative;
  font-weight: ${fontWeight.regular};
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${color.stroke};

  cursor: pointer;
`;

export const NameLink = styled.a`
  font-size: 0.875rem;
  font-weight: ${fontWeight.bold};
  color: ${color.white};

  ${Author}:hover &,
  ${Author}:focus-within & {
    text-decoration: underline;
  }
`;

export const Title = styled.h3`
  position: relative;
  font-weight: ${fontWeight.regular};
  font-size: 1.125rem;
  line-height: 133%;

  color: ${color.white};
`;

export const CardBottom = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Available = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Text = styled.span`
  font-weight: ${fontWeight.regular};
  font-size: 0.75rem;
  line-height: 200%;
  color: ${color.grey};
`;

export const AvailableCount = styled.strong`
  font-weight: ${fontWeight.semiBold};
  color: ${color.black};
`;
export const PriceCount = styled.strong`
  font-weight: ${fontWeight.semiBold};
  color: ${color.darkBlue};
`;
