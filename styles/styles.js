import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff', 
  },

  title: {
    fontSize: 36,
    color: '#00509e', 
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  imageInicial: {
    width: 390,
    height: 440,
    marginBottom: 10,
  },

  sensorContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 20,
  },

  value: {
    fontSize: 20,
    color: '#333',
    marginVertical: 5,
    fontWeight: 'bold',
  },

  button: {
    width: '80%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },

  buttonPrimary: {
    backgroundColor: '#4a90e2', 
  },

  buttonSecondary: {
    backgroundColor: '#d9534f', 
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  historyCard: {
  backgroundColor: '#ffffff',
  padding: 15,
  borderRadius: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3, 
  marginBottom: 12,
  width: '85%', 
  alignSelf: 'center',
  flexDirection: 'column', 
},

historyTime: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#00509e',
  textAlign: 'center',
  marginBottom: 8,
},

historyValuesContainer: {
  flexDirection: 'row', 
  justifyContent: 'space-around', 
  paddingVertical: 5,
},

historyValues: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  backgroundColor: '#f0f8ff', 
  padding: 8,
  borderRadius: 10,
  width: '30%', 
  textAlignVertical: 'center',
},

buttonTextContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},

buttonTextIcon: {
  marginRight: 8, 
},

buttonImage: {
  width: 24,  
  height: 24,
},

});
