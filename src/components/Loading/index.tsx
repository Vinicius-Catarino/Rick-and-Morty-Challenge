import React from "react";

import { Container } from "./styles";
import loadingImage from "../../assets/Loading.png";

const Loading: React.FC = () => (
  <>
    <Container>
      <img src={loadingImage} alt="Loading" />
      <text>Loading</text>
    </Container>
  </>
);

export default Loading;
