import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla principal</Text>
      <Button title="Regresar al Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Fondo beige claro
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
});
