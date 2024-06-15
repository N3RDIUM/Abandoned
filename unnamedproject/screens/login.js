import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import * as AppAuth from 'expo-app-auth';
import * as config from '../config';

export default class SigninScreen extends React.Component{
    signInAsync = async () => {
        try {
          const conf = {
            webClientId:
              '203956731717-df0c28ca79tufbgntavs5tl4b903u4vv.apps.googleusercontent.com',
            androidClientId:
              '203956731717-dg1i9nddqb83jt6jarq6s44ck0r69ecb.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          }
          let result = await AppAuth.authAsync(config);
          if (result.type === 'success') {
            console.log(result.accessToken);
            this.props.navigation.navigate('dashboard');
          } else {
            return { cancelled: true };
          }
        } catch (e) {
            //console.log(e.message);
            return { error: true };
        }
      };
    render(){
        if(config.test_mode){
            this.props.navigation.navigate('home_0');
        }
        return(
            <View style={styles.View}>
                <ImageBackground
                    source={require("../assets/img/corona_bg.png")}
                    style={styles.backgroundImage}
                >
                    <TouchableOpacity onPress={() => {
                        this.signInAsync();
                    }} style={styles.button}>
                        <Image
                            source={require("../assets/img/google-icon.png")}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Sign in with google</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
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
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    button: {
        width: "75%",
        height: 50,
        backgroundColor: 0xFFFFFFDD,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
});
