import React from "react";
import RickImage from "../../assets/Rick.png";

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Modal,
} from "@material-ui/core";

import { Container, Content, Background, Title, Text } from "./styles";

interface IModalCharacterDetails {
  handleClose(): void;
  open: boolean;
}

const ModalCharacterDetails: React.FC<IModalCharacterDetails> = ({
  handleClose,
  open,
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Container>
          <Grid justify="center" container>
            <Grid className="sidebar" item xs={12} md={4} lg={4}>
              <Background />
              <button onClick={handleClose}>Close</button>

              <Grid item xs={10}>
                <Card className="ImageSidebar">
                  <CardActionArea>
                    <img src={RickImage} style={{ width: "100%" }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rick
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Content>
                <div>
                  <Title>ABOUT</Title>
                  <Text>
                    Rick Sanchez is a male human. He is alive and well. Last
                    seen in May 31, 2020.
                  </Text>
                </div>

                <div>
                  <Title>ORIGIN</Title> <Text>Planet</Text>
                  <Text>Planet</Text>
                  <Text>Earth (Replacement Dimension)</Text>
                  <Text>Replacement Dimension</Text>
                </div>

                <div>
                  <Title>LOCATION</Title>
                  <Text>Planet</Text>
                  <Text>Earth (Replacement Dimension)</Text>
                  <Text>Replacement Dimension</Text>
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
