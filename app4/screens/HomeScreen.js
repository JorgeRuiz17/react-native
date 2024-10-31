import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

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

      {/* Botón personalizado de inicio de sesión */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Main')}
      >
        <Icon name="sign-in" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
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
