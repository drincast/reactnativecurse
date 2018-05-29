import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const TestComponent = () => {
  return (
    <Text>Prueba</Text>
  )
};


class AlbumList extends Component{
  state = {
    albums: []
  };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({
        albums: response.data
      }));
  }

  render(){
    console.log(this.state);
    return(
      <View>
        <Text>Album list xxxx!!!!</Text>
        <TestComponent></TestComponent>
      </View>
    );
  }
}



export default AlbumList;
