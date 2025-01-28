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
          <Text style={styles.value}>
            {item.timestamp} - X: {item.x}, Y: {item.y}, Z: {item.z}
          </Text>
        )}
      />
    </View>
  );
};

export default TelaHistorico;
