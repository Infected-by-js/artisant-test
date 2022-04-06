import type { IImage } from "../types/Product";

export const getAvatarName = (avatar: IImage): string => {
  return avatar.compressed ? avatar.compressed : avatar.original;
};
