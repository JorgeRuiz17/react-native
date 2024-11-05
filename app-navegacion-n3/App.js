import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Pantalla principal con los iconos
import InicioScreen from './screens/InicioScreen'; // Pantalla Inicio
import ConfiguracionScreen from './screens/ConfiguracionScreen'; // Pantalla Configuración

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla principal
        />
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ title: 'Inicio' }} 
        />
        <Stack.Screen 
          name="Configuración" 
          component={ConfiguracionScreen} 
          options={{ title: 'Configuración' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
