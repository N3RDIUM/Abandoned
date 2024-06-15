import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from '../Styles/default';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.HeaderContainer}>
                <SafeAreaView style={styles.androidSafeArea}/>
                <View style={styles.HeaderView}>
                    <Text style={styles.HeaderTitle}>HealthStar</Text>
                </View>
            </View>
        );
    }
}