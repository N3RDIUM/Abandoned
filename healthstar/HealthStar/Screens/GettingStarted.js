import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../Styles/default";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from "@firebase/auth";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import localdb from "../backend/localdb";
const axios = require("axios").default;

WebBrowser.maybeCompleteAuthSession();

function GoogleAuthButton({ navigation }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "27072008479-ttmv3jgb7t9ksqeitojcj7400sp7pkq3.apps.googleusercontent.com",
    webClientId:
      "27072008479-ttmv3jgb7t9ksqeitojcj7400sp7pkq3.apps.googleusercontent.com",
    androidClientId:
      "27072008479-fl816rf4i1ggm8jdcko7hvkujtgj2bl8.apps.googleusercontent.com",
    iosClientId:
      "27072008479-vtth9pj5hgen8lldmqt48eelf7o8qikb.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({
      native: "healthstar:/oauthredirect",
      useProxy: true,
    }),
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      axios
        .get(
          "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + id_token
        )
        .then((res) => {
          localdb.currentUser = res.data;
          // sign in with credential from the Google user
          signInWithCredential(
            localdb.auth,
            GoogleAuthProvider.credential(id_token)
          )
          navigation.navigate("MainDrawer");
        });
    }
  }, [response]);

  return (
    <TouchableOpacity
      style={styles.GettingStartedButton}
      onPress={() => {
        promptAsync().catch((error) => {
          console.log(error);
        });
      }}
    >
      <Text>Sign in with Google </Text>
      <Icon name="google" size={20} color="#000" />
    </TouchableOpacity>
  );
}

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.GettingStartedTitle}>Welcome to HealthStar!</Text>
        <Text style={styles.GettingStartedDescription}>
          HealthStar is your new health companion! This app is designed to
          encourage you to go healthy, and so that you'll never have to worry
          about showing your health data to the doctor again.
        </Text>
        <TouchableOpacity
          style={styles.GettingStartedButton}
          onPress={() => this.props.navigation.navigate("Screen2")}
        >
          <Text>Let's Go! </Text>
          <Icon name="arrow-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.GettingStartedTitle}>Let's get started!</Text>
        <Text style={styles.GettingStartedDescription}>
          Let's get you started! Please sign in with Google, and create your
          account.
        </Text>
        <GoogleAuthButton navigation={this.props.navigation} />
        <TouchableOpacity
          style={styles.GettingStartedBack}
          onPress={() => this.props.navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default class GettingStarted extends Component {
  componentDidMount() {
    onAuthStateChanged(localdb.auth, (user) => {
      if (user) {
        this.props.navigation.navigate("MainDrawer");
      }
    });
  }
  componentDidUpdate() {
    onAuthStateChanged(localdb.auth, (user) => {
      if (user) {
        this.props.navigation.navigate("MainDrawer");
      }
    });
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
