import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from '@firebase/auth';
import localdb from '../backend/localdb';
import { Component } from 'react';

import _index from '../Screens/_index';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default class MainStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRouteName: 'GettingStarted',
        };
    }
    async componentDidMount() {
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                this.setState({initialRouteName: 'MainDrawer'});
            } else {
                this.setState({initialRouteName: 'GettingStarted'});
            }
        });
    }
    render() {
        return (
            <Stack.Navigator initialRouteName={this.state.initialRouteName}>
                <Stack.Screen name="GettingStarted" component={_index.GettingStarted} options={{headerShown: false}}/>
                <Stack.Screen name="MainDrawer" component={DrawerNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
        );
    }
}