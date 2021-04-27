import React, { useCallback, useEffect, useState } from "react";

import Loading from "../../components/Loading";
import CardCharacter from "../../components/CardCharacter";
import ModalCharacterDetails from "../../components/ModalCharacterDetails";

import Pagination from "@material-ui/lab/Pagination";

import Rickandmorty from "../../assets/Rickandmorty.png";

import getAllCharacters from "../../services/graphql/getAllCharacters";

import Character from "../../models/Character";

import {
  Container,
  ContainerSearch,
  ContainerCard,
  ContainerPagination,
  Text,
} from "./styles";
import getCharactersByFilter from "../../services/graphql/getCharactersByFilter";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterToSearch, setCharacterToSearch] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();
  const [openModalSelected, setOpenModalSelected] = useState(false);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [countCharacters, setCountCharacters] = useState(0);
  const [errorText, setErrorText] = useState("");

  const loadAllCharacters = useCallback(async (page) => {
    try {
      setIsLoading(true);

      const response = await getAllCharacters(page);

      setCountCharacters(response.info.count);
      setCharacters(response.results);
      setPaginationNumber(page);
      setIsLoading(false);
    } catch (error) {
      setErrorText("An error occurred while fetching the characters");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAllCharacters(paginationNumber);
  }, [paginationNumber, loadAllCharacters]);

  const handleCharacterSearch = useCallback(async () => {
    if (!characterToSearch) {
      return setErrorText("Please enter a valid name");
    }

    try {
      setIsLoading(true);
      setPaginationNumber(1);

      const response = await getCharactersByFilter(
        paginationNumber,
        characterToSearch
      );

      if (!response) setErrorText("No character with this name");
      else setErrorText("");

      setCharacters(response.results);
      setIsLoading(false);
    } catch (error) {
      setErrorText("An error occurred while fetching the characters");
      setIsLoading(false);
    }
  }, [characterToSearch, paginationNumber]);

  const handleModal = useCallback(() => {
    setOpenModalSelected(!openModalSelected);
  }, [openModalSelected]);

  return (
    <>
      <Container isLoading={isLoading}>
        <ContainerSearch>
          <img src={Rickandmorty} alt="Rick and Morty" />
          <div>
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") handleCharacterSearch();
              }}
              id="inputTextToSearch"
              value={characterToSearch}
              onChange={(e) => setCharacterToSearch(e.target.value)}
              placeholder="Search character"
            />
            <button onClick={() => handleCharacterSearch()} id="buttonSearch">
              Search
            </button>
          </div>
          <Text>{errorText}</Text>
        </ContainerSearch>

        <ContainerCard>
          {characters.map((character) => (
            <CardCharacter
              onClick={() => {
                setSelectedCharacter(character);
                handleModal();
              }}
              key={character.id}
              character={character}
            />
          ))}
        </ContainerCard>

        <ContainerPagination>
          <Pagination
            count={countCharacters / 20}
            onChange={(e, page) => loadAllCharacters(page)}
            color="primary"
          />
        </ContainerPagination>

        {selectedCharacter && (
          <ModalCharacterDetails
            open={openModalSelected}
            character={selectedCharacter}
            handleClose={() => handleModal()}
          />
        )}
      </Container>
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
