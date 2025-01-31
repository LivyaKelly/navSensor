import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styles from '../styles/styles';

const TelaMonitoramento = ({ navigation }) => {
  const [dados, setDados] = useState({ x: 0, y: 0, z: 0 });
  const [historico, setHistorico] = useState([]);
  const [monitorando, setMonitorando] = useState(true);

  useEffect(() => {
    let inscricao;

    const iniciarMonitoramento = () => {
      inscricao = Accelerometer.addListener((resultado) => {
        setDados(resultado);

        if (Math.abs(resultado.x) > 1.5 || Math.abs(resultado.y) > 1.5 || Math.abs(resultado.z) > 1.5) {
          const movimento = {
            x: resultado.x.toFixed(2),
            y: resultado.y.toFixed(2),
            z: resultado.z.toFixed(2),
            timestamp: new Date().toLocaleTimeString(),
          };

          setHistorico((prev) => [...prev, movimento]);

          Alert.alert(
            '⚠️ Movimento Detectado! ⚠️',
            `📊 Valores registrados:\n📌 X: ${movimento.x}\n📌 Y: ${movimento.y}\n📌 Z: ${movimento.z}`,
            [{ text: 'OK', style: 'cancel' }]
          );
        }
      });

      Accelerometer.setUpdateInterval(500);
    };

    if (monitorando) {
      iniciarMonitoramento();
    }

    return () => {
      if (inscricao) {
        inscricao.remove();
      }
    };
  }, [monitorando]);

  const toggleMonitoramento = () => {
    setMonitorando(!monitorando);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acelerômetro:</Text>

      <View style={styles.sensorContainer}>
        <Text style={styles.value}>X: {dados.x.toFixed(2)}</Text>
        <Text style={styles.value}>Y: {dados.y.toFixed(2)}</Text>
        <Text style={styles.value}>Z: {dados.z.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, monitorando ? styles.buttonSecondary : styles.buttonPrimary]}
        onPress={toggleMonitoramento}
      >
        <View style={styles.buttonTextContainer}>
          <Image
            source={monitorando ? require('../assets/Paused_icon.png') : require('../assets/Play_icon.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>{monitorando ? 'Pausar Monitoramento' : 'Retomar Monitoramento'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonPrimary]}
        onPress={() => navigation.navigate('Historico', { historico })}
      >
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Ver Histórico</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TelaMonitoramento;
