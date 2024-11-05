import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aplicación Integración</Text>
      
      {/* Botón de Cerrar Sesión con Pressable */}
      <Pressable
        style={({ pressed }) => [
          styles.logoutButton,
          { backgroundColor: pressed ? '#1B5E20' : '#2E7D32' } // Cambia color al presionar
        ]}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </Pressable>

      {/* Botón Informativo */}
      <Button
        title="Información"
        onPress={() => Alert.alert('Información', 'Te encuentras en la pantalla principal')}
        color="#2E7D32" // Color verde oscuro para el botón
      />
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
    fontSize: 20,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E7D32', // Color verde oscuro
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10, // Espacio adicional entre botones
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
