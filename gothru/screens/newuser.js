import React from "react";
import { View, StyleSheet, Image, Text, FlatList, Dimensions } from "react-native";
let scrollVal;

class Intro1 extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require("../assets/icon.png")} />
          <Text style={styles.text}>Welcome to GoThru!</Text>
        </View>
    );
  }
}

class Intro2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.text}>GoThru is an NCERT based learning app.</Text>
      </View>
    );
  }
}

export default class Intro extends React.Component {
  constructor() {
    super();
    this.state = {scrollVal : 0};
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 1 },
            { key: 2 },
          ]}
          renderItem={({item}) => {
            if (item.key == 1) {
              return <Intro1 />;
            } else {
              return <Intro2 />;
            }
          }}
          onScroll={({nativeEvent}) => {
            scrollVal = Math.round(nativeEvent.contentOffset.x / Dimensions.get('window').width)
            this.setState({scrollVal})
          }}
          keyExtractor={item => item.key.toString()}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View style={styles.indicator}>
          <View style={this.state.scrollVal == 0 ? styles.indicator_active : styles.indicator_inactive}></View>
          <View style={this.state.scrollVal == 1 ? styles.indicator_active : styles.indicator_inactive}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004aad",
  },
  text_small: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#004aad",
  },
  button: {
    backgroundColor: "#004aad",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  indicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  indicator_inactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    borderColor: "#004aad",
    borderWidth: 3,
  },
  indicator_active: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#004aad",
    marginHorizontal: 5,
  },
});
