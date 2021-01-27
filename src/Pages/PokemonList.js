import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {AppLoading} from 'expo-app-loading';
import {useFonts} from 'expo-font';



function PokemonList({pokeData, navigation}) {

  const [fontsLoaded] = useFonts({
    fontPokemon: require('../assets/fonts/PokemonSolid.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

    //Estilização
    const styles = StyleSheet.create({
        line: {
            fontSize: 30,
            marginBottom: 20,
            fontFamily: 'fontPokemon'
        },
        number: {
          fontSize: 25,
          flexDirection: 'row',
          marginLeft: 15
        },
  
        image: {
          width: 100, 
          height: 100,
          aspectRatio: 1
        },
  
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#6ec2e0',
          borderColor: '#2f6cd6',
          borderBottomWidth: 3,
          padding: 30
        }
    })

    if(pokeData.length !== 0 ){
      
        const textElements = pokeData.map((person) => {
      
        const url = person.url;
        const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
        const ImageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png';
        

          return (
              <TouchableHighlight key = {pokemonNumber} onPress = { () => 
              navigation.navigate("PokemonDetails", {person}  )} >
                <View style = {styles.container} >
                <Text style = {styles.line} > {person.name} </Text>
                  <Image style = {styles.image} source = {{uri: ImageUrl}} />
                </View>
              </TouchableHighlight>
          )
        })
        return textElements;
      }
  
      const styleLoad = StyleSheet.create({
        line: {
          fontSize: 25,
        },
  
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100
        }
      })
  
      return (
          <View style = {styleLoad.container} >
              <Text style = {styleLoad.line} >Carregando os dados...</Text>
          </View>
      )
}

export default PokemonList;