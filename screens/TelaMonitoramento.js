import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styles from '../styles/styles';

const TelaMonitoramento = ({ navigation }) => {
  const [dados, setDados] = useState({ x: 0, y: 0, z: 0 });
  const [historico, setHistorico] = useState([]);
  const [monitorando, setMonitorando] = useState(true);

  useEffect(() => {
    const inscricao = Accelerometer.addListener((resultado) => {
      setDados(resultado);

      if (
        Math.abs(resultado.x) > 1.5 ||
        Math.abs(resultado.y) > 1.5 ||
        Math.abs(resultado.z) > 1.5
      ) {
        const movimento = {
          x: resultado.x.toFixed(2),
          y: resultado.y.toFixed(2),
          z: resultado.z.toFixed(2),
          timestamp: new Date().toLocaleTimeString(),
        };
        setHistorico((prev) => [...prev, movimento]);
        Alert.alert('Movimento Detectado!', `X: ${movimento.x}, Y: ${movimento.y}, Z: ${movimento.z}`);
      }
    });

    Accelerometer.setUpdateInterval(500);

    return () => inscricao && inscricao.remove();
  }, [monitorando]);

  const toggleMonitoramento = () => {
    setMonitorando(!monitorando);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acelerômetro:</Text>
      <Text style={styles.value}>X: {dados.x.toFixed(2)}</Text>
      <Text style={styles.value}>Y: {dados.y.toFixed(2)}</Text>
      <Text style={styles.value}>Z: {dados.z.toFixed(2)}</Text>
      <Button title={monitorando ? 'Pausar Monitoramento' : 'Retomar Monitoramento'} onPress={toggleMonitoramento} color="#007bff" />
      <Button title="Ver Histórico" onPress={() => navigation.navigate('Historico', { historico })} color="#007bff" />
    </View>
  );
};

export default TelaMonitoramento;
