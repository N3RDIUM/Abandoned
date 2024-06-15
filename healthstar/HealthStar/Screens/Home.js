import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { onAuthStateChanged } from '@firebase/auth';
import styles from '../Styles/default';
import localdb from '../backend/localdb';
import firebase from '../firebase_config';

export default class Home extends Component {
    componentDidMount(){
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                db = firebase.firestore();
                db.getDoc(db.doc(db.collection(localdb.db, 'users'), user.displayName)).then((doc) => {
                    db.setDoc(db.doc(db.collection(localdb.db, 'users'), user.displayName), {
                        name: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        uid: user.uid,
                    });
                });
            } else {
                this.props.navigation.navigate("GettingStarted");
            }
        });
    }
    render() {
        return (
            <View 
            style={styles.Container}>
                <Text style={styles.GettingStartedTitle}>Home</Text>
                <TouchableOpacity
                    style={styles.GettingStartedButton} 
                    onPress={() => {
                    this.props.navigation.navigate("Profile");
                }}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
