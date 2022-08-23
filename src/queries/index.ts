import {gql} from '@apollo/client';
export  const CharacterInfo = gql`
query {
    characters {
      results {
        id
        name
        gender
        image
      }
    }
  }
`