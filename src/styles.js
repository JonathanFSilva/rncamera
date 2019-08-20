import {Dimensions, StyleSheet} from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mask: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskIcon: {
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: 340,
    fontWeight: '100',
    textAlign: 'center',
  },
  button: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  buttonIcon: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagePreview: {
    flex: 1,
  },
  buttonsPreview: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
}));
