import React from "react";
import _ from "lodash";
import { Card, Name, Type } from "./styles";
import Character from "../../models/Character";

interface ICardCharacterProps {
  character: Character;
  onClick(): void;
}

const CardCharacter: React.FC<ICardCharacterProps> = ({
  character,
  onClick,
}) => {
  return (
    <>
      <Card onClick={onClick}>
        <img src={character.image} alt="character" />
        <div>
          <Name>{_.truncate(character.name, { length: 15 })}</Name>
          <Type>{_.truncate(character.species, { length: 25 })}</Type>
        </div>
      </Card>
    </>
  );
};

export default CardCharacter;
