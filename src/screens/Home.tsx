import { Text, FlatList, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { favoriteStateData } from "../store/modules/Favorite/reducer";

import { useQuery } from "@apollo/client";
import { CharacterInfo } from "../queries";

import { Header } from "../components/Header";
import { Characters } from "../components/Character";
import { FavoriteCharModal } from "../components/Favorites";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  onLayout: () => void;
}
export function Home({ onLayout }: Props) {
  const { loading, error, data } = useQuery(CharacterInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(favoriteStateData);
  return (
    <View
      style={{
        height: "100%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#000",
      }}
      onLayout={onLayout}
    >
      <Header />
      <TouchableOpacity
        style={{
          marginBottom: 20,
          width: "95%",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
        onPress={() => setIsModalOpen(true)}
      >
        <AntDesign name="heart" size={24} color="#E435AB" />
        <Text style={{ color: "white", marginLeft: 5 }}>{`${
          favorites?.length ?? 0
        }`}</Text>
      </TouchableOpacity>

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
    </View>
  );
}
