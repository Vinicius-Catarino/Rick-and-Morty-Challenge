import React, { useCallback, useEffect, useState } from "react";

import Loading from "../../components/Loading";
import CardCharacter from "../../components/CardCharacter";
import ModalCharacterDetails from "../../components/ModalCharacterDetails";

import api from "../../services/api";
import Pagination from "@material-ui/lab/Pagination";

import Rickandmorty from "../../assets/Rickandmorty.png";

import getAllCharacters from "../../services/graphql/getAllCharacters";

import Character from "../../models/Character";

import { Container, Form, ContainerCard, ContainerPagination } from "./styles";
import getCharactersByFilter from "../../services/graphql/getCharactersByFilter";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterToSearch, setCharacterToSearch] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [countCharacters, setCountCharacters] = useState(0);

  const loadAllCharacters = useCallback(async (page) => {
    try {
      setIsLoading(true);

      const response = await getAllCharacters(page);

      setCountCharacters(response.info.count);
      setCharacters(response.results);
      setPaginationNumber(page);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadAllCharacters(paginationNumber);
  }, [paginationNumber, loadAllCharacters]);

  const handleCharacterSearch = useCallback(
    async (event) => {
      event.preventDefault();

      if (!characterToSearch) {
        console.log("RETORNAR UM ERRO");
      }

      try {
        setIsLoading(true);
        setPaginationNumber(1);
        const response = await getCharactersByFilter(
          paginationNumber,
          characterToSearch
        );

        setCharacters(response.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    },
    [characterToSearch, paginationNumber]
  );

  const onSelectCharacter = useCallback(
    (id) => {
      setSelectedCharacter(!selectedCharacter);
    },
    [selectedCharacter]
  );

  return (
    <>
      <Container isLoading={isLoading}>
        <Form onSubmit={handleCharacterSearch}>
          <img src={Rickandmorty} alt="Rick and Morty" />
          <div>
            <input
              id="inputTextToSearch"
              value={characterToSearch}
              onChange={(e) => setCharacterToSearch(e.target.value)}
              placeholder="Search character"
            />
            <button id="buttonSearch" type="submit">
              Search
            </button>
          </div>
        </Form>

        <ContainerCard>
          {characters.map((character) => (
            <CardCharacter
              onClick={() => onSelectCharacter(character.id)}
              key={character.id}
              name={character.name}
              type={character.species}
              img={character.image}
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
            open={selectedCharacter}
            handleClose={() => onSelectCharacter(1)}
          />
        )}
      </Container>
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
