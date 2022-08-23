
import React from 'react';
import { View } from 'react-native';
import { Home } from './src/screens/Home';
import {ApolloProvider} from '@apollo/client'
import { client } from './src/services';
export default function App() {
  return (
   <ApolloProvider client={client}>
    <Home/>
   </ApolloProvider>
  );
}


