import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Ariq");
  const [age, setAge] = useState(22);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g. 20"
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        Name: {name}, Age: {age}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 10
  }
});
