import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "ariq", key: 1 },
    { name: "daffa", key: 2 },
    { name: "athallah", key: 3 },
    { name: "putra", key: 4 },
    { name: "harahap", key: 5 },
    { name: "indri", key: 6 },
    { name: "athar", key: 7 },
    { name: "jokowi", key: 8 },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.item}>{person.name}</Text>
          </View>
        ))}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
  },
});
