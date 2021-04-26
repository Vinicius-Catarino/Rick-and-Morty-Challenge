import styled, { css } from "styled-components";

import BackgroundImage from "../../assets/Background.png";

interface IContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<IContainerProps>`
  justify-content: center;
  align-items: center;

  overflow: auto;
  min-height: 100%;
  min-width: 100%;

  width: 100%;
  height: 100%;

  padding: 0px;

  position: fixed;
  top: 0;
  left: 0;

  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;

  ${(props) =>
    props.isLoading &&
    css`
      filter: blur(12px);
    `}
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin-top: 60px;
  }

  input {
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    padding: 6px 8px;
    margin-right: 16px;
    color: #9f9f9f;
  }

  button {
    padding: 6px 8px;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    color: #fff;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px;
  justify-content: center;
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;
