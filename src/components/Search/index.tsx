import React, { useState } from "react";
import ImageRickAndMorty from "../../assets/Rickandmorty.png";
import { Container, Input, Button } from "./styles";

interface ISearchProps {
  setIsLoading(): void;
  setCharacterToSearch(): void;
  character: string;
}

const Search: React.FC<ISearchProps> = ({
  character,
  setCharacterToSearch,
}) => {
  return (
    <>
      <Container>
        <img src={ImageRickAndMorty} alt="Rick And Morty" />

        <div>
          <Input
            value={character}
            // onChange={(e) => setCharacterToSearch(e.target.value)}
            placeholder="Search character"
          />
          <Button onClick={() => {}}>Search</Button>
        </div>
      </Container>
    </>
  );
};

export default Search;
