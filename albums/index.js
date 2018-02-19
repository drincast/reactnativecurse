// import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
// technique import destructuring
import { AppRegistry } from 'react-native';

// import nesting
import Header from './src/components/header';

// Create a Component
const App = () => (
    <Header />
);

// Render the component in the device
AppRegistry.registerComponent('albums', () => App);
