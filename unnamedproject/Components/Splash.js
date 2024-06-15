import React from "react";
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";

export default class SplashScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
    this.timer = setTimeout(() => {
      this.setState({
        isLoading: false
      })
      this.props.navigation.navigate('Login')
    }, 2000);
  }
  render() {
    return (
      <View style={styles.View}>
        <ImageBackground
          source={require("../assets/img/corona_bg.png")}
          style={styles.backgroundImage}
        >
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.text}>loading</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
});
