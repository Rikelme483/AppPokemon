import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import {AppLoading} from 'expo-app-loading';
import * as Font from 'expo-font';
import {useFonts} from 'expo-font';
import PokemonPages from './src/Pages/PokemonPages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetails from './src/Pages/PokemonDetails';

export default function App() {

  const [load] = useFonts({
    fontePokemon: require('./src/assets/fonts/PokemonSolid.ttf')
  });

  if(!load) {
    return <AppLoading/>
  }

  const Stack = createStackNavigator();  

  const style = StyleSheet.create({
    headerStyle: {
      backgroundColor: '#e5e825',
    },
    headerTitleStyle: {
      fontSize: 40,
      color: 'blue',
      textAlign: 'center',
      textShadowColor:'#585858',
      textShadowOffset:{width: 3, height: 3},
      textShadowRadius: 10,
      fontFamily: 'fontePokemon'
    }
  })

  return (
       <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen name = 'Pokedex!' component = {PokemonPages} options = {style} />
          <Stack.Screen name = 'PokemonDetails' component = {PokemonDetails} options = {({route}) => {
            const namePokemon = route.params.person.name;

            return({
              title: namePokemon,
              headerStyle: style.headerStyle,
              headerTitleStyle: style.headerTitleStyle
            })
          } } />
         </Stack.Navigator>
       </NavigationContainer>
  );
}


