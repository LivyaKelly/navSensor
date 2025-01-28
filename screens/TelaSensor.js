// import React, { useState, useEffect } from 'react';
// import { View, Text, Alert } from 'react-native';
// import { Accelerometer } from 'expo-sensors';

// const TelaSensor = () => {
//   const [dados, setDados] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => {
//     const inscricao = Accelerometer.addListener(resultado => {
//       setDados(resultado);

//       if (Math.abs(resultado.x) > 1.5 || Math.abs(resultado.y) > 1.5 || Math.abs(resultado.z) > 1.5) {
//         Alert.alert('Alerta!', 'Movimento brusco detectado!');
//       }
//     });

//     Accelerometer.setUpdateInterval(500);

//     return () => inscricao && inscricao.remove();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Acelerômetro:</Text>
//       <Text>X: {dados.x.toFixed(2)}</Text>
//       <Text>Y: {dados.y.toFixed(2)}</Text>
//       <Text>Z: {dados.z.toFixed(2)}</Text>
//     </View>
//   );
// };

// export default TelaSensor;
