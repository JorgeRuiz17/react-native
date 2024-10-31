import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <LinearGradient
      colors={['#FFD700', '#32CD32']} // Colores del gradiente
      style={styles.container}
    >
      {/* Imagen de la Municipalidad de Quinchao */}
      <Image source={require('./assets/LOG_AMBIENTE.png')} style={styles.logo} />

      {/* Texto centrado */}
      <Text style={styles.text}>Quinchao Logo</Text>

      {/* Botón simple que muestra una alerta */}
      <Button title="Mostrar Alerta" onPress={() => Alert.alert("Alerta", "Botón simple presionado")} />

      {/* Botón personalizado con TouchableHighlight */}
      <TouchableHighlight
        style={styles.customButton}
        underlayColor="#005700"
        onPress={() => Alert.alert("Alerta", "Botón personalizado presionado")}
      >
        <Text style={styles.buttonText}>Botón Personalizado</Text>
      </TouchableHighlight>

      {/* Botón personalizado con Pressable e ícono de Google */}
      <Pressable
        style={styles.iconButton}
        onPress={() => Alert.alert("Alerta", "Botón con ícono presionado")}
      >
        <Icon name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Conectar con Google</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
