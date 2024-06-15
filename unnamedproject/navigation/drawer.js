import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './tabs'
import React from 'react';

const Drawer = createDrawerNavigator();

export default class DrawerNav extends React.Component{
    render(){
        return (
            <Drawer.Navigator initialRouteName = "Home">
                <Drawer.Screen name="Home" component={Tabs}/>
            </Drawer.Navigator>
        )
    }
}
