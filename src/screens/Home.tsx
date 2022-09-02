import { Text, FlatList} from "react-native";
import { useSelector } from "react-redux";
import { favoriteStateData } from "../store/modules/Favorite/reducer";

import { useQuery } from "@apollo/client";
import { CharacterInfo } from "../queries";

import { Header } from "../components/Header";
import { Characters } from "../components/Character";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Container, FavoriteLoader } from "./style";
import { FavoriteCharModal } from "../components/Favorites";

interface Props {
  onLayout: () => void;
}
export function Home({ onLayout }: Props) {
  const { loading, error, data } = useQuery(CharacterInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(favoriteStateData);
  return (
    <Container onLayout={onLayout}>
      <Header />
      <FavoriteLoader onPress={() => setIsModalOpen(true)}>
        <AntDesign name="heart" size={24} color="#E435AB" />
        <Text style={{ color: "white", marginLeft: 5 }}>{`${
          favorites?.length ?? 0
        }`}</Text>
      </FavoriteLoader>

      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}
      {data && (
        <FlatList
          data={data.characters.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Characters card={item} />}
        />
      )}
      {isModalOpen && (
        <FavoriteCharModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Container>
  );
}
