import React, { Component } from "react";
import { View, Button } from "react-native";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <Button
          title="LOGIN"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default LoginScreen;
