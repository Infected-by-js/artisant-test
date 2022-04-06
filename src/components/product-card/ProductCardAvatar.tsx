import { FC } from "react";
import { filesUrl } from "../../api/endpoints";
import { LazyFile } from "../lazy-file/LazyFile";

type Props = {
  avatarName: string;
};

export const ProductCardAvatar: FC<Props> = ({ avatarName }) => {
  const fileSrc = `${filesUrl}/${avatarName}`;
  const isVideo = avatarName.endsWith(".mp4");

  return isVideo ? (
    <LazyFile src={fileSrc} fileType="video" />
  ) : (
    <LazyFile src={fileSrc} fileType="img" />
  );
};
