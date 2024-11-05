import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#FFD700', '#32CD32']}
      style={styles.container}
    >
      {/* Logo y textos debajo */}
      <Image source={require('../assets/LOG_AMBIENTE.png')} style={styles.logo} />
      <Text style={styles.mainText}>Municipalidad de Quinchao</Text>
      <Text style={styles.subText}>Departamento de Medioambiente</Text>

      {/* Botón personalizado de inicio de sesión con logo de Google */}
      <TouchableHighlight
        style={styles.loginButton}
        underlayColor="#DDDDDD" // Color al presionar
        onPress={() => navigation.navigate('Main')}
      >
        <View style={styles.buttonContent}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' }}
            style={styles.googleIcon}
          />
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </View>
      </TouchableHighlight>
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
    marginBottom: 10,
  },
  mainText: {
    fontSize: 22,
    color: '#2E7D32',
  },
  subText: {
    fontSize: 14,
    color: '#2E7D32',
    marginBottom: 30,
  },
  loginButton: {
    borderRadius: 5,
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco del botón
    padding: 10,
    borderRadius: 5,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  buttonText: {
    color: '#2E7D32', // Color verde oscuro para el texto
    fontWeight: '600',
    fontSize: 16,
  },
});
