import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;

  z-index: 2;

  img {
    border-radius: 8px;
  }

  text {
    margin-top: 20px;
    font-size: 24px;
  }
`;
