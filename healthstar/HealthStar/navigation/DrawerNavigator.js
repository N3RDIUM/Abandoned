import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, getHeaderTitle, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import _index from '../Screens/_index';
import localdb from '../backend/localdb';
import styles from '../Styles/default';
import { Header } from '../components/Header';
import { onAuthStateChanged } from '@firebase/auth';

class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoURL: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            headerTitle: (props) => <Header {...props} />,
        });
        
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                this.setState({
                    photoURL: user.photoURL,
                })
            } else {
                this.props.navigation.navigate("GettingStarted");
            }
        })
    }
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <Image source={{uri: this.state.photoURL}} style={styles.ProfileImage}/>
                <DrawerItemList {...this.props} />
            </DrawerContentScrollView>
        );
    }
}

header: ({ navigation, route, options }) => {
    const title = 'HealthStar: ' + getHeaderTitle(options, route.name);
    return (
        <Header title={title} navigation={navigation} options = {options}/>
    );
}

const Drawer = createDrawerNavigator();

export default class Navigator extends React.Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={_index.Home} />
                <Drawer.Screen name="Profile" component={_index.Profile} />
            </Drawer.Navigator>
        );
    }
}