import {
  Image,
  Alert,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useState } from "react";
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
  ModalLabel,
  CloseBtn,
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

  const [modalIsOpen, setModalIsOpen] = useState(false);

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
              marginLeft: 15,
              height: 105,
              width: 105,
              borderRadius: 20,
            }}
          />
        </ImageContainer>
        <Content>
          <LabelContent>{` Name: ${card.name}`}</LabelContent>
          <LabelContent>{` Gender: ${card.gender}`}</LabelContent>
          <LabelContent>{` Specie: ${card.species}`}</LabelContent>
          <View
            style={{
              width: "85%",
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handleFavorite}>
              <Text style={{ color: "white" }}>
                <Feather name="heart" color="white" size={24} />
                Add to favorite
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalIsOpen(true)}>
              <Text style={{ color: "white" }}>
                <Feather name="eye" color="white" size={24} />
                Details
              </Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              visible={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              transparent={true}
            >
              <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                  <CloseBtn>
                    <Feather
                      name="x-square"
                      size={36}
                      color="black"
                      onPress={() => setModalIsOpen(false)}
                    />
                  </CloseBtn>

                  <Image
                    style={{
                      height: 120,
                      width: 120,
                      marginBottom: 20,
                      borderRadius: 150,
                    }}
                    source={{ uri: `${card.image}` }}
                  />
                  <ModalLabel>
                    <Feather name="heart" size={24} />
                    is favorite?
                  </ModalLabel>
                  <ModalLabel>{` Name: ${card.name}`}</ModalLabel>
                  <ModalLabel>{` Gender: ${card.gender}`}</ModalLabel>
                  <ModalLabel>{` Specie: ${card.species}`}</ModalLabel>
                </View>
              </View>
            </Modal>
          </View>
        </Content>
      </Wrapper>
    </Container>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "60%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E435AB",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
});
