import React, { Component } from 'react';
import { View, Text } from 'react-native';

//class based components can use life cycle methods
class AlbumList extends Component {
    //ComponentWillMount -> When component is about to render to the screen
    componentWillMount(){
        console.log('componentWillMount in AlbumList');
    }
    render(){
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

export default AlbumList;