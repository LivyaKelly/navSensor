import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
  },

  title: {
    fontSize: 24,
    color: '#007bff', 
    marginBottom: 20,
  },

  value: {
    fontSize: 25,
    color: '#000', 
    marginVertical: 5,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: '#000',
    marginBottom: 50,
  },
});
