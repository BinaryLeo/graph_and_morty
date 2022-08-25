import {
    Text,
    FlatList,
    View
  } from 'react-native';


  import { useQuery } from '@apollo/client';
  import { CharacterInfo } from '../queries';
import { Header } from '../components/Header';
import {Character} from '../components/Characters'
  
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
          renderItem={ ({item}) => <Character card={item}/>}
        />
      }
    </View>
    )
  }