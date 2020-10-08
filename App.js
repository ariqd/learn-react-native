import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "ariq", id: 1 },
    { name: "daffa", id: 2 },
    { name: "athallah", id: 3 },
    { name: "putra", id: 4 },
    { name: "harahap", id: 5 },
    { name: "indri", id: 6 },
    { name: "athar", id: 7 },
    { name: "jokowi", id: 8 },
    { name: "marco", id: 9 },
    { name: "eren", id: 10 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      <StatusBar style="auto" />
      {/* <ScrollView>
        <View style={styles.container}>
          {people.map((person) => (
            <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
