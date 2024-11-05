import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#000000', '#FFA500']} // Gradiente de negro a naranja
      style={styles.container}
    >
      {/* Portada del Álbum */}
      <View style={styles.albumContainer}>
        <Image
          source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273182fe5b5d3e3c3fcc895a3c8' }} // Imagen de álbum simulada
          style={styles.albumImg}
        />
        <Text style={styles.titulo}>Wake Me Up</Text>
        <Text style={styles.artista}>Avicii</Text>
      </View>
      
      {/* Icono de Me Gusta */}
      <View style={styles.likeContainer}>
        <Icon name="heart" size={30} color="#FF0000" />
      </View>

      {/* Controles de Reproducción */}
      <View style={styles.controlsContainer}>
        <Icon name="backward" size={30} color="#333" style={styles.controlIcon} />
        <Icon name="play" size={30} color="#333" style={styles.controlIcon} />
        <Icon name="forward" size={30} color="#333" style={styles.controlIcon} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Sombra en Android
  },
  albumImg: {
    width: 290, // Ancho de la imagen
    height: 290, // Alto de la imagen
    borderRadius: 10,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  artista: {
    fontSize: 20,
    color: '#333',
  },
  likeContainer: {
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 80, // Baja los iconos de control
  },
  controlIcon: {
    marginHorizontal: 15,
  },
});
