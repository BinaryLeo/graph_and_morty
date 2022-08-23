import {
    Text,
    FlatList,
    View
  } from 'react-native';

  import { Characters } from '../components/Characters';
  import { useQuery } from '@apollo/client';
  import { CharacterInfo } from '../queries';
import { Header } from '../components/Header';
  
  interface Props {
    onLayout: () => void;
  }
  export function Home({ onLayout }: Props){
    const { loading, error, data } = useQuery(CharacterInfo)
    return(
      <View style={{backgroundColor: '#000'}} onLayout={onLayout}>
      <Header/>
      { loading && <Text>Loading ...</Text> }
      { error && <Text>Error ...</Text> }
      { data && 
        <FlatList
          data={data.characters.results}
          renderItem={ ({item}) => <Characters card={item}/>}
        />
      }
    </View>
    )
  }