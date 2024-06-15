import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const Filter = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight },
      origin: { x: faceX, y: faceY },
    },
    rollAngle,
  },
}) => {
  let height = faceHeight / 3;
  let width = faceWidth;
  let angle = rollAngle;
  let position = {
    x: faceX,
    y: faceY,
  };
  console.log(width, height, angle, position);

  return (
    <View
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y + height / 4 * 3,
      }}>
      <Image
        source={require("./assets/glasses.png")}
        style={{
          width: width,
          height: height,
          resizeMode: 'cover',
          transform: [{ rotate: `${angle}deg` }],
        }}
      />
    </View>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      faces: { faces: [] },
    };
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission);
  }

  onCameraPermission = (status) => {
    this.setState({ hasCameraPermission: status.status === 'granted' });
  };

  onFacesDetected = (faces) => {
    this.setState({ faces: faces });
    console.log(this.state);
  };

  onFaceDetectionError = (error) => {
    console.log(error);
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>Cannot access the camera :(</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <View style={styles.heading}>
          <Text style={styles.title}>Face filters ;)</Text>
        </View>
        <View style={styles.camera}>
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.front}
            onFacesDetected={this.onFacesDetected}
            onFacesDetectionError={this.onFacesDetectionError}
          />
          {this.state.faces.faces.map((face) => {
            return <Filter key={this.state.faces.faces.indexOf(face)} face={face} />;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
  },
  safeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  camera: {
    flex: 0.65,
    height: '80%',
  },
  heading: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
