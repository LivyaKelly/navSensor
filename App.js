import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavegador from './navigation/StackNavegador';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavegador />
    </NavigationContainer>
  );
}
