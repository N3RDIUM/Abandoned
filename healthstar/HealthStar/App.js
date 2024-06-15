// HealthStar: com.subnerd.healthstar
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import MainStack from './navigation/MainNavigator';

import firebase from './firebase_config';

export default class App extends Component {
    render() {
        return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
        );
    } 
}