import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Navegación N°3</Text>

      {/* Icono de Home */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Icon name="home" size={50} color="#FFA500" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      {/* Icono de Settings */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Configuración')}
      >
        <Icon name="cog" size={50} color="#FFA500" />
        <Text style={styles.iconText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Fondo beige claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#FFA500',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconText: {
    fontSize: 16,
    color: '#FFA500',
    marginTop: 8,
  },
});
