import {Text, Image } from "react-native";
import { Container, Wrapper, ImageContainer, Content,LabelContent } from "./styles";
interface CharacterProps {
  card: {
    image: string;
    name: string;
    gender: string;
    species: string;
  };
}
export function Character({ card }: CharacterProps) {
  return (
    <Container>
      <Wrapper>
      <ImageContainer>
      <Image 
      source={{ uri: card.image }}
      style={{ marginLeft:5, height: 120, width: 120, borderRadius: 50 }} />
      </ImageContainer>
      <Content>
      <LabelContent>{` Name: ${card.name}`}</LabelContent>
      <LabelContent>{` Gender: ${card.gender}`}</LabelContent>
      <LabelContent>{` Specie: ${card.species}`}</LabelContent>
      </Content>
      </Wrapper>
    </Container>
  );
}
