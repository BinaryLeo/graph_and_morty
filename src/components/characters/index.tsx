import {
  Image,
  Alert,
  Button,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { favoriteStateData } from "../../store/modules/Favorite/reducer";
import { ICharacter } from "../../types";
import { addNewFavoriteCharacter } from "../../store/modules/Favorite/reducer";
import {
  Container,
  Wrapper,
  ImageContainer,
  Content,
  LabelContent,
} from "./styles";
import { Feather } from "@expo/vector-icons";
export interface CharacterProps {
  card: {
    id: number;
    image: string;
    name: string;
    gender: string;
    species: string;
  };
}
export function Characters({ card }: CharacterProps) {
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteStateData);

  const handleFavorite = () => {
    if (favorites.find((character) => character.id === card.id)) {
      Alert.alert("Ouch!", ` ${card.name} is already in favorites!`);
      return;
    }

    dispatch(addNewFavoriteCharacter(card as ICharacter));
  };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            source={{ uri: card.image }}
            style={{
              marginLeft: 10,
              height: 120,
              width: 120,
              borderRadius: 60,
            }}
          />
        </ImageContainer>
        <Content>
          <LabelContent>{` Name: ${card.name}`}</LabelContent>
          <LabelContent>{` Gender: ${card.gender}`}</LabelContent>
          <LabelContent>{` Specie: ${card.species}`}</LabelContent>
          <View
            style={{
              width: "80%",
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white" }}>
                <Feather
                  name="heart"
                  color="white"
                  size={24}
                  onPress={handleFavorite}
                />{" "}
                Add to favorite
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "white" }}>
                <Feather name="eye" color="white" size={24} /> Details
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Wrapper>
    </Container>
  );
}
