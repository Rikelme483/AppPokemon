import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import PokemonList from './PokemonList';

function PokemonPages(props) {

  const {navigation} = props;

    

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=151')
            .then(response => {
                setPokemon(response.data.results)  //then para setar os dados na const setPokemon
        }).catch(error => {
            console.log('Ocorreu um erro! - ' + error);
        })
    }, [])





    return (
      <ScrollView>
        <View>
          <PokemonList pokeData = {pokemon} navigation = {navigation} />
        </View>
      </ScrollView>
    )

}

export default PokemonPages;