import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { container, textStyle } = styles;

  return(
    <View style={container}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  container:{
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
    height: 60,
    justifyContent: 'center',

    //paddingTop: 15, en ios se necesita
    ////las propiedades shadow no funcionan directamente en android
    shadowColor: '#000',
    shadowOffset: { width: 100, height: 2 },
    shadowOpacity: 0.5,

    //para android
    elevation: 5
  },

  textStyle:{
    textAlign: 'center',
    fontSize:20,

  }
}

export default Header;
