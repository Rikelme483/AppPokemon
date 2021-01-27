import React from  'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo';

function DataLines({label, data}) {
    
    const loadFontDataLines = useFonts({
        fontPokemon: require('../assets/fonts/PokemonHollow.ttf')
    })

    if(!loadFontDataLines) {
        return <AppLoading></AppLoading>
    }

    const styles = StyleSheet.create({
        line: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: 6,
            borderTopWidth: 3,
            paddingVertical: 30,
        },
        text: {
            fontSize: 23,
            textAlign: 'center',
            fontFamily: 'fontPokemon'
        },
    })

    return (
        <View style = {styles.line} >
            <Text style = {styles.text} > {label} </Text>
            <Text style = {styles.text} > {data} </Text>
        </View>
    )
}

export default DataLines;