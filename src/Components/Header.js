import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header(props) {
    return (
        <View style = {style.container}>
            <Text style = {style.title} > {props.title} </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 23,
		backgroundColor: 'rgb(255,255,28)',
		alignItems: 'center',
		justifyContent: 'center',
    },
    title: {
        color: '#1f6aff',
		padding: 10,
		fontSize: 40
    }
})

export default Header;