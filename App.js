import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, SafeAreaView, FlatList,Alert } from 'react-native';

import FlatListExample from './src/components/FlatListExample';
import PlatformExample from './src/components/PlatformExample';

export default class App extends Component {

 
 
  render() {

    return (

      <SafeAreaView style={styles.cotainer} >
        
        <FlatListExample /> 
      {/* <PlatformExample /> */}
      
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  
  },

})
