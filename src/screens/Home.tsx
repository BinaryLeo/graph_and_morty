import {
    Text,
    FlatList,
    SafeAreaView
  } from 'react-native';

  import { Characters } from '../components/characters';
  import {useQuery} from '@apollo/client';
  import { CharacterInfo } from '../queries';

  export function Home(){
    const { loading, error, data } = useQuery(CharacterInfo)
    return(
        <SafeAreaView>
      { loading && <Text>Loading ...</Text> }
      { error && <Text>Error ...</Text> }
      { data && 
        <FlatList
          data={data.characters.results}
          renderItem={ ({item}) => <Characters card={item}/>}
        />
      }
    </SafeAreaView>
    )
  }