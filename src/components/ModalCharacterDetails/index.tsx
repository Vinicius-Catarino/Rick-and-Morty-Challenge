import React from "react";

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Modal,
} from "@material-ui/core";

import { FiX, FiUsers } from "react-icons/fi";

import Character from "../../models/Character";

import { format, parseISO } from "date-fns";

import {
  Container,
  Content,
  Background,
  Title,
  Text,
  TextPlanet,
  TextCard,
} from "./styles";
import formatPronounGender from "../../utils/formatPronounGender";

interface IModalCharacterDetails {
  handleClose(): void;
  character: Character;
  open: boolean;
}

const ModalCharacterDetails: React.FC<IModalCharacterDetails> = ({
  character,
  handleClose,
  open,
}) => {
  const date = parseISO(character.created);
  return (
    <>
      <Modal className="modalDetails" open={open} onClose={handleClose}>
        <Container>
          <Grid justify="center" container>
            <Grid className="sidebar" item xs={12} sm={12} md={4} lg={4}>
              <Background />

              <button className="buttonDesktop" onClick={handleClose}>
                Close
              </button>
              <button className="buttonMobile" onClick={handleClose}>
                <FiX />
              </button>

              <Grid item xs={10}>
                <Card className="imageSidebar">
                  <CardActionArea className="cardArea">
                    <img src={character.image} alt={character.name} />
                    <CardContent className="cardContent">
                      <TextCard>{character.name}</TextCard>
                      <TextCard>{character.species}</TextCard>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Content>
                <div>
                  <Title>ABOUT</Title>
                  <Text>
                    {character.name} is a {character.gender} {character.species}
                    . {formatPronounGender(character.gender)} is{" "}
                    {character.status}. Last seen in{" "}
                    {format(date, "MMM dd',' yyyy")}
                  </Text>
                </div>

                <div>
                  <Title>ORIGIN</Title> <Text>Planet</Text>
                  <Text>
                    {character?.origin?.name
                      ? character.origin.name
                      : "Unknown Planet"}
                  </Text>
                  <TextPlanet>
                    {character?.origin?.dimension
                      ? character.origin.dimension
                      : "Unkown dimension"}
                  </TextPlanet>
                  <Text>
                    <FiUsers />
                    {character?.origin?.residents?.length
                      ? character?.origin?.residents?.length
                      : " Unkown "}
                    residents
                  </Text>
                </div>

                <div>
                  <Title>LOCATION</Title>
                  <Text>Planet</Text>
                  <TextPlanet>
                    {character?.location?.name
                      ? character.location.name
                      : "Unknown Location"}
                  </TextPlanet>
                  <Text>
                    {character?.location?.dimension
                      ? character.location.dimension
                      : "Unkown dimension"}
                  </Text>
                  <Text>
                    <FiUsers />{" "}
                    {character?.location?.residents?.length
                      ? character?.location?.residents?.length
                      : " Unkown "}{" "}
                    residents
                  </Text>
                </div>
              </Content>
            </Grid>
          </Grid>
        </Container>
      </Modal>

      {/*  */}
    </>
  );
};

export default ModalCharacterDetails;
