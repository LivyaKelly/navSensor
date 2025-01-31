import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../screens/TelaInicial';
import TelaMonitoramento from '../screens/TelaMonitoramento';
import TelaHistorico from '../screens/TelaHistorico';

const Stack = createStackNavigator();

const StackNavegador = () => {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen name="Inicial" component={TelaInicial} options={{ title: 'Início' }} />
      <Stack.Screen name="Monitoramento" component={TelaMonitoramento} options={{ title: 'Monitoramento' }} />
      <Stack.Screen name="Historico" component={TelaHistorico} options={{ title: 'Histórico' }} />
    </Stack.Navigator>
  );
};

export default StackNavegador;
