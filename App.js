import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: '1' },
    { text: "create an app", key: '2' },
    { text: "play nintendo switch", key: '3' },
    { text: "go shopping", key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TodoForm submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
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
    padding: 30,
  },
  list: {
    marginTop: 20,
  },
});
