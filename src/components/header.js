// import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = () =>{
    const { textStyle, viewStyle } =styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums !</Text>
        </View>
    );
};


const styles = {
    viewStyle:{
        backgroundColor: '#1de9b6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation:2,
        position: 'relative'
    },
    textStyle:{
        fontSize: 25
    }
};

//make component available to other parts of the application
export default Header;