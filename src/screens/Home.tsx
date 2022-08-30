import { Text, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { favoriteStateData } from "../store/modules/Favorite/reducer";

import { useQuery } from "@apollo/client";
import { CharacterInfo } from "../queries";

import { Header } from "../components/Header";
import { Characters } from "../components/Characters";

import{Feather,AntDesign} from '@expo/vector-icons';

interface Props {
  onLayout: () => void;
}
export function Home({ onLayout }: Props) {
  const { loading, error, data } = useQuery(CharacterInfo);
  const favorites = useSelector(favoriteStateData);
  return (
    <View style={{  height:'95%', backgroundColor: "#000" }} onLayout={onLayout}>
      
      <Header />
      <View style={{marginBottom:20, width: '95%', alignItems:'center', 
      justifyContent:'flex-end', flexDirection:'row'}}>
      <AntDesign name="heart" size={24} color="#E435AB"/>
      <Text style={{color: "white", marginLeft: 5}}>{`${favorites?.length ?? 0}`}</Text>
      
      </View>
      
      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}
      {data && (
        <FlatList
          data={data.characters.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Characters
              card={item}
            />
          )}
        />
      )}
    </View>
  );
}
