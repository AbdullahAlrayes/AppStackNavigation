import React, { Component } from "react";
import { View, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Back to Login Page"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

export default HomeScreen;
