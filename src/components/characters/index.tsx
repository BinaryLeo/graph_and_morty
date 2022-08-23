import{View,Text,Image}  from 'react-native';

interface Props {
    card:{
        image: string;
        name: string;
        gender: string;
      }
  }

  export function Characters({card}:Props){
    return(
     <View>
        <Image
        source ={{uri: card.image}}
        style={{width: 200, height: 200}}
       
        />
         <Text>{  `${card.name}, ${card.gender}`}</Text>

     </View>
    )
  }