import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import BracketForm from "./components/BracketForm";

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <BracketForm />
    {/* <Text category="h1">HOME</Text> */}
  </Layout>
);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;
