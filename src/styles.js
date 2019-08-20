import {Dimensions, StyleSheet} from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  camera: {
    flex: 3,
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
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  buttonIcon: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagePreview: {
    flex: 3,
  },
  buttonsPreview: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  galleryContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000000',
  },
  galleryImage: {
    width: 140,
    height: 140,
    marginVertical: 5,
    marginHorizontal: (Dimensions.get('window').width / 2) - 70,
  },
}));
