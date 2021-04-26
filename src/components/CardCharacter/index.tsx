import React from "react";
import _ from "lodash";
import { Card, Name, Type } from "./styles";

interface ICardCharacterProps {
  name: string;
  type: string;
  img: string;
  onClick(): void;
}

const CardCharacter: React.FC<ICardCharacterProps> = ({
  name,
  type,
  img,
  onClick,
}) => {
  return (
    <>
      <Card onClick={onClick}>
        <img src={img} alt="character" />
        <div>
          <Name>{_.truncate(name, { length: 15 })}</Name>
          <Type>{_.truncate(type, { length: 25 })}</Type>
        </div>
      </Card>
    </>
  );
};

export default CardCharacter;
