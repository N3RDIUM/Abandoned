import * as React from "react";
import MainNav from "./nav/main_stacknav";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    );
  }
}
