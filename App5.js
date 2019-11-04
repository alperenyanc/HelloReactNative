import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import Card from './src/components/card';

const { width } = Dimensions.get('window');

export default class App extends Component {



  render() {

    return (

      <View style={styles.cotainer} >
        <View style={{ flex: 2/3}} >

        </View>
        <View style={{flex:1/3}} >
          <ScrollView horizontal={true} pagingEnabled={true} >
            <Text style={styles.title} >1</Text>
            <Text style={styles.title} >2</Text>
            <Text style={styles.title} >3</Text>
            <Text style={styles.title} >4</Text>
            <Text style={styles.title} >5</Text>
       
            <Text style={styles.title} >6</Text>
            <Text style={styles.title} >7</Text>
            <Text style={styles.title} >8</Text>
            <Text style={styles.title} >9</Text>
            <Text style={styles.title} >10</Text>

          </ScrollView>
        </View>


      </View>
    )
  }
}
const styles = StyleSheet.create({
  cotainer: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',

  },
  title: {
    backgroundColor: 'orange',
    marginVertical: 30,
    textAlign: 'center',
    paddingVertical: 60,
    borderColor: 'black',
    borderWidth: 10,
    fontSize: 36,
    width
  }



})
