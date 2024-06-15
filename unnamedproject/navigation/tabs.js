import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';

import HomeScreen from '../screens/home';

var TabNav = createBottomTabNavigator();

export default class Tabs extends React.Component{
    render(){
        return (
              <TabNav.Navigator
                  screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home_1') {
                          iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                      },
                      tabBarActiveTintColor: 'turquoise',
                      tabBarInactiveTintColor: 'gray',
                      tabBarVisible: false,
                    })}
              >
                  <TabNav.Screen name="Home_1" component={HomeScreen} options = {{headerShown: false}}/>
              </TabNav.Navigator>
        )
    }
}
