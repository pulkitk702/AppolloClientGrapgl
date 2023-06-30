import React from "react";
import { View, Text, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
function ShowData() {
  const GET_USERS = gql`
    query Query {
      pokemon_v2_ability {
        id
        name
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_USERS, { errorPolicy: "all" });

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading.......</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{error.message}</Text>
        {console.log(error.name)}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginTop: hp("4%") }}>All Pokemon Id and Name</Text>
      <FlatList
        data={data.pokemon_v2_ability}
        renderItem={({ item }) => (
          <View style={{ marginTop: hp("2%"), width: wp("90%") }}>
            <Text>ID: {item.id}</Text>
            <Text>Pokemon Name: {item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default ShowData;
