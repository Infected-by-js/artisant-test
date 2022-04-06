import styled from "styled-components";
import { color } from "../../assets/styles/constants";

export const Placeholder = styled.span`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-top: 6px solid ${color.darkBlue};
  border-right: 6px solid transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const Image = styled.img.attrs({
  alt: "product"
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
  type: "video/mp4"
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;
