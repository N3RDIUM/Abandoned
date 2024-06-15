import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { onAuthStateChanged } from '@firebase/auth';
import styles from '../Styles/default';
import localdb from '../backend/localdb';
import { Button } from 'react-native-paper';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }
    componentDidMount(){
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                this.setState({
                    user: user,
                })
            } else {
                this.props.navigation.navigate("GettingStarted");
            }
        });
    }
    render() {
        return this.state.user? (
            <View style={styles.Container}>
                <Text style={styles.ProfileTitle}>Your Profile</Text>
                <Image style={styles.ProfileImage} source={{uri: this.state.user.photoURL}}/>
                <View style={styles.ProfileDescriptionContainer}>
                    <Text>{"Name: " + this.state.user.displayName}</Text>
                    <Text>{"Email: " + this.state.user.email}</Text>
                    <Text>{"Login ID: " + this.state.user.uid}</Text>
                </View>
                <View style={styles.FlexRow}>
                    <TouchableOpacity
                        style={styles.GettingStartedButton} 
                        onPress={() => {
                            localdb.auth.signOut();
                    }}>
                        <Text>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ): (
            <View style={styles.Container}>
                <Text style={styles.GettingStartedTitle}>Something went wrong. Please try again.</Text>
                <Button onPress={() => {
                    localdb.auth.signOut();
                }}>Sign Out</Button>
            </View>
        )
    }
}
