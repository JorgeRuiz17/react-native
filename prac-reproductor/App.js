import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const songs = [
  {
    title: 'Wake Me Up',
    artist: 'Avicii',
    albumArt: 'https://media.tenor.com/zOoFfAQi6fkAAAAM/avicii.gif',
  },
  {
    title: 'Come As You Are',
    artist: 'Nirvana',
    albumArt: 'https://media.tenor.com/XkPZbMIhSJIAAAAM/adgrunge.gif',
  },
  {
    title: 'Sweet Child O Mine',
    artist: 'Guns N Roses',
    albumArt: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDIzeWQ1amh0cDFpazY0NGl2cXN4MW1qazF0bGc4cTVrbHNwcmpwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3esBYKwj5rpo4YU/giphy.webp',
  },
];

export default function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const avanzarCancion = () => {
    setSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    console.log("Avanzar a canción:", (songIndex + 1) % songs.length);
  };

  const retrocederCancion = () => {
    setSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    console.log("Retroceder a canción:", (songIndex - 1 + songs.length) % songs.length);
  };

  return (
    <LinearGradient colors={['#000000', '#FFA500']} style={styles.container}>
      {/* Portada del Álbum */}
      <View style={styles.albumContainer}>
        <Image
          source={{ uri: songs[songIndex].albumArt }}
          style={styles.albumImg}
        />
        <Text style={styles.titulo}>{songs[songIndex].title}</Text>
        <Text style={styles.artista}>{songs[songIndex].artist}</Text>
      </View>

      {/* Botón de Me Gusta */}
      <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.likeContainer}>
        <Icon name="heart" size={30} color={liked ? '#FF0000' : '#333333'} />
      </TouchableOpacity>

      {/* Controles de Navegación */}
      <View style={styles.controlsContainer}>
        <Button title="Anterior" onPress={retrocederCancion} />
        <Button title="Siguiente" onPress={avanzarCancion} />
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
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  albumImg: {
    width: 290,
    height: 290,
    borderRadius: 10,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 8,
  },
  artista: {
    fontSize: 20,
    color: '#FFF',
  },
  likeContainer: {
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});
