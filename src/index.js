import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const App = () => {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  takePicture = async () => {
    try {
      if (this.camera) {
        setIsLoading(true);

        const data = await this.camera.takePictureAsync({
          quality: 1,
          base64: true,
          pauseAfterCapture: true,
          skipProcessing: true,
        });

        setImage(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro!', error.message);
    }
  };

  storePicture = async () => {
    try {
      if (!!image) {
        await setGallery([...gallery, image]);
        await setImage(null);
      }
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível salvar a imagem!');
    }
  };

  removePicture = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {!!image ? (
        <ImageBackground style={styles.imagePreview} source={{uri: image.uri}}>
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
      {gallery.length > 0 && (
        <ScrollView style={styles.galleryContainer}>
          {gallery.map((image, key) => {
            return <ImageBackground style={styles.galleryImage} source={{uri: image.uri}} key={key} />;
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default App;
