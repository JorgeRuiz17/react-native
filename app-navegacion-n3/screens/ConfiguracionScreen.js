import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

export default function ConfiguracionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
