import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/MulherCorrendo.png')} style={styles.imageInicial} />
      <Text style={styles.title}>Bem-vindo ao Sensor Acelerômetro</Text>

      <TouchableOpacity
        style={[styles.button, styles.buttonPrimary]}
        onPress={() => navigation.navigate('Monitoramento')}
      >
        <View style={styles.buttonTextContainer}>
          <Image source={require('../assets/Foguete_icon.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Iniciar Monitoramento</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TelaInicial;
