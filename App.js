import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ShowData from "./src/ShowData/ShowData";
import { View, Text } from "react-native";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <ShowData />
  </ApolloProvider>
);

export default App;
