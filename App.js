import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./Component/Login";
import HomeScreen from "./Component/Home";

export default class App extends React.Component {
  render() {
    return <AppStackNavigation />;
  }
}

const AppStackNavigation = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
