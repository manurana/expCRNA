import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BracketForm from "./components/BracketForm";

export default function App() {
  return <BracketForm />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
