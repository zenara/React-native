import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class based components can use life cycle methods
class AlbumList extends Component {
    state = { albums: [] };
    //ComponentWillMount -> When component is about to render to the screen
    componentWillMount(){
        console.log('componentWillMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }
    renderAlbums(){
        return this.state.albums.map(album =>
        <AlbumDetail key={album.title} record={album}/>);
    }
    render(){
        console.log (this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;