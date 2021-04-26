import styled from "styled-components";
import backgroundModal from "../../assets/backgroundModal.png";
import Rick from "../../assets/Rick.png";
export const Container = styled.div`
  background: #000;
  position: fixed;
  width: 60%;
  top: 10%;
  left: 20%;

  @media (min-width: 0px) and (max-width: 540px) {
    top: 150px;
  }

  .sidebar {
    position: relative;

    @media (min-width: 0px) and (max-width: 540px) {
      top: -120px;
    }
  }

  .ImageSidebar {
    margin-left: -50px;
    margin-right: 50px;

    @media (min-width: 0px) and (max-width: 540px) {
      margin-left: 25px;
      margin-right: -25px;
    }
  }
`;

export const Content = styled.div`
  padding: 60px 40px;

  div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-top: 100px;
    }
  }
`;

export const Title = styled.text`
  font-size: 13px;
  color: #cbd736;
  letter-spacing: 0.65em;
  line-height: 18px;
`;

export const Text = styled.text`
  font-size: 13px;
  color: #d3d3d3;
  line-height: 22px;
`;

export const Background = styled.div`
  position: absolute;
  background: url(${backgroundModal}) no-repeat;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-size: cover;

  @media (min-width: 0px) and (max-width: 540px) {
    top: 120px;
    height: 95px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
  }
  /* @media (max-width: 960px) {
    height: 95px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
  } */
`;

export const ContainerCharacterImage = styled.div``;
