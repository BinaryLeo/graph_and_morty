import React from "react";
import { Dimensions, Image } from "react-native";

//*Set image according to the  aspect ratio
const image = require("../../assets/banner.png");
const SCREEN_WIDTH = Dimensions.get("window").width;
const { width, height } = Image.resolveAssetSource(image);
const ratio = height / width;

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Image
        source={image}
        style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * ratio }}
      />
    </Container>
  );
}
