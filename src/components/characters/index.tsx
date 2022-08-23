import {Text, Image } from "react-native";
import { Container } from "./styles";
interface CharacterProps {
  card: {
    image: string;
    name: string;
    gender: string;
  };
}
export function Characters({ card }: CharacterProps) {
  return (
    <Container>
      <Image 
      source={{ uri: card.image }}
       style={{ width: 200, height: 200 }} />
      <Text>{`${card.name}, ${card.gender}`}</Text>
    </Container>
  );
}
