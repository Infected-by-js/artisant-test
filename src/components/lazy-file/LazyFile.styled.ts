import styled from 'styled-components';

export const Image = styled.img.attrs({
  alt: 'product',
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
