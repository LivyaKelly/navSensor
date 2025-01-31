import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';

const TelaHistorico = ({ route }) => {
  const { historico } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Movimentos</Text>
      <FlatList
        data={historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyCard}>
            <Text style={styles.historyTime}>⏰ {item.timestamp}</Text>
            <View style={styles.historyValuesContainer}>
              <Text style={styles.historyValues}>📍 X: {item.x}</Text>
              <Text style={styles.historyValues}>📍 Y: {item.y}</Text>
              <Text style={styles.historyValues}>📍 Z: {item.z}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TelaHistorico;
