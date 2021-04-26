import styled from "styled-components";

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 180px;
  height: 190px;

  margin-right: 40px;
  margin-top: 30px;

  background: #1b1b1b;
  border: 2px solid #606060;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover {
    border: 2px solid #cbd736;
    box-sizing: border-box;

    box-shadow: 0px 0px 0px 3px #c9d636, 0px 0px 5px 4px #c9d636,
      inset 0px 0px 0px 1px #1f1f1f;
  }

  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 5px 10px;
  }

  img {
    width: 176px;
    height: 135px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const Name = styled.text`
  font-weight: bold;
  font-size: 20px;
`;

export const Type = styled.text`
  font-size: 12px;
`;
