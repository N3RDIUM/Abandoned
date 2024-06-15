import * as React from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import database from '../database'
import _userData from '../db';

export default class Splash extends React.Component {
  componentDidMount() {
    if(database.auth.currentUser == undefined) {
      if(_userData.new != true) {
        this.props.navigation.navigate('login')
      } else {
        this.props.navigation.navigate('getting_started')
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <ActivityIndicator size="large" color="#004aad" />
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
});
