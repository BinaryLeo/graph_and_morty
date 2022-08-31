import { Modal, TouchableOpacity, View, Text, Button,StyleSheet, Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  favoriteStateData,
  removeFavoriteCharacter,
} from "../../store/modules/Favorite/reducer";
import {
    Container
  } from "./styles";

export interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export function FavoriteCharModal({ isModalOpen,setIsModalOpen }: Props) {
  const favorites = useSelector(favoriteStateData);
  const dispatch = useDispatch();

  const handleRemoveCharacter = (id: number) => {
    dispatch(removeFavoriteCharacter(id));
  };

  return (
    <Modal
      animationType="slide"
      visible={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <View style={styles.modalBackground}>
        {favorites.length > 0 ? (
          <View style={styles.modalContainer}>
           
            {favorites.map((character, index) => (
              <Container key={index}>
                <View>
                  <Text  style={{color:'white'}} >{character.name}</Text>
                  <Image
                    style={{
                      height: 80,
                      width: 80,
                      marginBottom: 10,
                      borderRadius: 5,
                    }}
                    source={{ uri: `${character.image}` }}
                  />
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => handleRemoveCharacter(character.id)}
                  >
                    <AntDesign name="close" size={24} color="#E435AB" />
                  </TouchableOpacity>
                </View>
                
              </Container>
            ))}
          </View>
        ) : (
          <View>
            <Text>Favorite some character</Text>
          </View>
        )}
        <Button
          title="Close"
          onPress={() => setIsModalOpen(false)}
          color="#eaeaea"
        />
      </View>
    </Modal>
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
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E435AB",
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 20,
      elevation: 20,
    },
  });