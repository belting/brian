import bcgdvLogo from "../../images/bcgdv.jpg";
import bcgGammaLogo from "../../images/bcg-gamma.jpg";
import shareInteractiveLogo from "../../images/share-interactive.jpg";
import sundaeLogo from "../../images/sundae.gif";
import zantlerLogo from "../../images/zantler.jpg";
import {StaticImageData} from "next/image";

enum ImageKey {
  BCG_GAMMA = "bcg-gamma",
  BCGDV = "bcgdv",
  SHARE_INTERACTIVE = "share-interactive",
  SUNDAE = "sundae",
  ZANTLER = "zantler",
}

export const getCompanyImage = (imageKey: string): StaticImageData => {
  switch (imageKey) {
    case ImageKey.BCG_GAMMA:
      return bcgGammaLogo;
    case ImageKey.BCGDV:
      return bcgdvLogo;
    case ImageKey.SHARE_INTERACTIVE:
      return shareInteractiveLogo;
    case ImageKey.SUNDAE:
      return sundaeLogo;
    case ImageKey.ZANTLER:
      return zantlerLogo;
    default:
      throw new Error(`Image with key ${imageKey} not found`);
  }
}
