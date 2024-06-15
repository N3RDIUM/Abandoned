// stack Navigator
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './drawer';
import SplashScreen from '../Components/Splash';
import Login from '../screens/login';
import * as React from 'react';

const Stack = createStackNavigator();

export default class StackNav extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "Splash">
                    <Stack.Screen name="home_0" component={Drawer} options = {{headerShown: false}}/>
                    <Stack.Screen name="Splash" component={SplashScreen} options = {{headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login} options = {{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
