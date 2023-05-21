import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        sorce={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
        alt="alt img"
      />
      <Text>sd</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
