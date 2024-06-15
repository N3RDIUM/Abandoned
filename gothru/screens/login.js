import * as React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import database from "../database";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <TextInput style={styles.input} placeholder="Email" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  logo: {
    height: "70%",
    width: "70%",
    resizeMode: "contain",
  },
  email: {
    height: "70%",
    width: "70%",
    resizeMode: "contain",
  },
});
