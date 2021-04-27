import styled from "styled-components";
import backgroundModal from "../../assets/backgroundModal.png";

export const Container = styled.div`
  background: #000;
  position: fixed;
  width: 60%;
  top: 10%;
  left: 20%;

  @media (min-width: 0px) and (max-width: 960px) {
    top: 150px;
  }

  .sidebar {
    position: relative;

    img {
      width: 100%;

      @media (min-width: 960px) and (max-width: 1280px) {
        height: 254px;
      }
    }

    @media (min-width: 0px) and (max-width: 960px) {
      top: -120px;
    }
  }

  button {
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 5px;
    background: transparent;
  }

  .buttonDesktop {
    @media (min-width: 0px) and (max-width: 960px) {
      display: none;
    }

    @media (min-width: 960px) {
      position: relative;
      margin: 10px;
    }
  }

  .buttonMobile {
    @media (min-width: 0px) and (max-width: 960px) {
      border: none;
      position: relative;
      left: -50px;
      font-size: 24px;
    }

    @media (min-width: 960px) {
      display: none;
    }
  }

  .imageSidebar {
    margin-left: -40px;
    margin-right: 40px;

    @media (min-width: 0px) and (max-width: 960px) {
      margin-left: 25px;
      margin-right: -25px;
    }

    @media (min-width: 960px) and (max-width: 1280px) {
      height: 300px;
      margin-top: 40px;
    }

    @media (min-width: 1280px) {
      margin-top: 20px;
      margin-bottom: 30px;
    }
  }

  .cardContent {
    display: flex;
    flex-direction: column;
    @media (min-width: 960px) {
      padding: 0 10px;
      height: 40px;
    }
  }
`;

export const Content = styled.div`
  padding: 20px 40px;

  div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-top: 30px;
    }
  }

  @media (min-width: 0px) and (max-width: 960px) {
    padding: 0 40px 30px 40px;
    margin-top: -60px;
  }

  @media (min-width: 960px) {
    padding: 60px 40px;
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

export const TextCard = styled.text`
  font-size: 13px;
  color: #d3d3d3;
`;

export const TextPlanet = styled.text`
  font-size: 20px;
  color: #fff;
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

  @media (min-width: 0px) and (max-width: 960px) {
    top: 120px;
    height: 95px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
  }
`;

export const ContainerCharacterImage = styled.div``;
