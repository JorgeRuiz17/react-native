import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#FFD700', '#32CD32']} // Colores del gradiente
      style={styles.container}
    >
      {/* Imagen de la Municipalidad de Quinchao */}
      <Image source={require('./assets/LOG_AMBIENTE.png')} style={styles.logo} />

      {/* Texto centrado */}
      <Text style={styles.text}>Quinchao</Text>

      {/* Imagen de Google desde Internet */}
      <Image
        source={{ uri: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png' }}
        style={styles.internetLogo}
      />
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
    width: 150, // Ajusta el tamaño de la imagen
    height: 150,
    resizeMode: 'contain', // Asegura alta calidad sin distorsión
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600', // Semi-negrita
    color: '#2E7D32', // Verde oscuro
    marginBottom: 20,
  },
  internetLogo: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 30, // Coloca la imagen en la parte inferior
  },
});
