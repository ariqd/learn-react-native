import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play nintendo switch", key: 3 },
  ]);

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20,
  }
});
