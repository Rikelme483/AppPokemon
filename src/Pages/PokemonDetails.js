import axios from 'axios';
import React from  'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Text, Image, StyleSheet, View, ScrollView} from 'react-native';
import DataLines from '../Components/DataLines';


function PokemonDetails({route}) {


    const [pokeDados, setPokeDados] = useState([]);

    const {person} = route.params;

        const url = person.url
        const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
        const ImageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png';


    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/'+pokemonNumber+'/')
            .then(response => {
                setPokeDados(response.data) 
        }).catch(error => {
            console.log('Ocorreu um erro! - ' + error);
        })
    }, [])

    if(pokeDados.length !== 0) {

        const moveSet = pokeDados.moves;
        const tipo = pokeDados.types;
        const altura = pokeDados.height / 10;
        const peso = pokeDados.weight / 10;
        const numero = pokeDados.id;

        const arrayType = tipo.map(item => ' ' + item.type.name ).toString()
        const arrayMoves = moveSet.map(item => ' ' + item.move.name ).toString()
        
        const styles = StyleSheet.create({
            image: {
                marginTop: 10,
                marginBottom: 20,
                aspectRatio: 1,
            },
            backGround: {
                backgroundColor: '#6ec2e0'
            }
        })
        
        return (
            <ScrollView>
                <View style = {styles.backGround} >
                    <Image style = {styles.image} source = {{uri: ImageUrl}} ></Image>
                    <DataLines label = 'Número:' data = {numero} ></DataLines>
                    <DataLines label = 'Tipo:' data = {arrayType} ></DataLines>
                    <DataLines label = 'Altura:' data = {altura + 'm'} ></DataLines>
                    <DataLines label = 'Peso:' data = {peso + 'kg'} ></DataLines>
                    <DataLines label = 'Habilidades:' data = {arrayMoves} ></DataLines>
                </View>
            </ScrollView>
        )
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

    return(
        <View style = {styleLoad.container} >
            <Text style = {styleLoad.line} >Carregando os dados....</Text>
        </View>
    )

    

    
}

export default PokemonDetails;