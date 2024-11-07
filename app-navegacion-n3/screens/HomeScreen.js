import React from 'react'; 
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción:</Text>

      <View style={styles.iconRow}>
        {/* Botón de Home */}
        <Pressable
          style={styles.iconWrapper}
          onPress={() => navigation.navigate('Inicio')} // Dirige a InicioScreen
        >
          <View style={[styles.iconContainer, styles.homeButton]}>
            <Icon name="home" size={30} color="#FFFFFF" />
          </View>
          <Text style={styles.iconText}>Home</Text>
        </Pressable>

        {/* Botón de Settings */}
        <Pressable
          style={styles.iconWrapper}
          onPress={() => navigation.navigate('Configuración')} //dirige ConfiguracionScreen
        >
          <View style={[styles.iconContainer, styles.settingsButton]}>
            <Icon name="cog" size={30} color="#FFFFFF" />
          </View>
          <Text style={styles.iconText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  iconWrapper: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconContainer: {
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButton: {
    backgroundColor: '#FFA500', // Color amarillo-naranja
  },
  settingsButton: {
    backgroundColor: '#40E0D0', // Color turquesa 
  },
  iconText: {
    fontSize: 16,
    color: '#000000', // Texto en negro
    marginTop: 8,
  },
});
