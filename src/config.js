import { PixelRatio, Dimensions } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const api = "https://...";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
export const iconSize = PixelRatio.getPixelSizeForLayoutSize(11);

export const Images = {
  /** Images */
  search: null,
};

export const loadImages = () => {
  return new Promise(function(resolve, reject) {
    Promise.all([
      // Use react-native-vector-icons to get image sources here. e.g.
      FontAwesome.getImageSource("search", iconSize)
    ])
        .then(values => {
          Images.search = values[0];
          resolve(true);
        })
        .catch(error => reject(error));
  });
};