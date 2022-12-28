import osuLogo from '../../images/osu.jpg';
import uwLogo from '../../images/uw.jpg';
import {StaticImageData} from "next/image";

enum ImageKey {
  OSU = "osu",
  UW = "uw",
}

export const getEducationImage = (imageKey: string): StaticImageData => {
  switch (imageKey) {
    case ImageKey.OSU:
      return osuLogo;
    case ImageKey.UW:
      return uwLogo;
    default:
      throw new Error(`Image with key ${imageKey} not found`);
  }
};
