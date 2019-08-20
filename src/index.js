import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  CameraRoll,
  Image,
  ImageBackground,
  PermissionsAndroid,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const App = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  takePicture = async () => {
    try {
      if (this.camera) {
        setIsLoading(true);

        const data = await this.camera.takePictureAsync({
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true,
        });

        setImage(data.uri);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro!', error.message);
    }
  };

  storePicture = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Access Storage',
          message: 'Access Storage for the pictures',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await CameraRoll.saveToCameraRoll(image);
      } else {
        Alert.alert('Erro!', 'Não foi possível salvar a imagem!');
      }
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível salvar a imagem!');
    }
  };

  removePicture = () => {
    setImage(null);
  };

  return (
    <>
      {!!image ? (
        <ImageBackground style={styles.imagePreview} source={{uri: image}}>
          <View style={styles.buttonsPreview}>
            <Icon name="x" size={30} color="#ffffff" onPress={removePicture} />
            <Icon
              name="check"
              size={30}
              color="#ffffff"
              onPress={storePicture}
            />
          </View>
        </ImageBackground>
      ) : (
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para utilizar a câmera',
            message: 'É necessário a sua permissão para utilizar a câmera!',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          style={styles.camera}>
          <View style={styles.container}>
            <View style={styles.mask}>
              {isLoading ? (
                <ActivityIndicator size={50} color="#ffffff" />
              ) : (
                <Icon name="maximize" style={styles.maskIcon} />
              )}
            </View>
            <TouchableOpacity onPress={takePicture} style={styles.button}>
              <Icon name="camera" style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
        </RNCamera>
      )}
    </>
  );
};

export default App;
