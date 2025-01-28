import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../styles/styles';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/menina-run.jpg')} style={styles.image} />
      <Text style={styles.title}>Bem-vindo ao Sensor de Acelerômetro</Text>
      <Button title="Iniciar Monitoramento" onPress={() => navigation.navigate('Monitoramento')} color="#007bff" />
      <Button title="Ver Histórico" onPress={() => navigation.navigate('Historico')} color="#007bff" />
    </View>
  );
};

export default TelaInicial;
