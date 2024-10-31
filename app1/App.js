import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#FFD700', '#32CD32']} // Colores del gradiente (dorado y verde)
      style={styles.container}
    >
      <Text style={styles.text}>Texto en gradiente verde y amarillo</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600', // Semi-negrita
    color: '#2E7D32', // Verde oscuro
  },
});

