import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, SafeAreaView, FlatList, Alert } from 'react-native';
import FlatListExample from './src/components/FlatListExample'

export default class App extends Component {

  state = {
    number: 1,
    image: require('./src/assets/unlikeInstagram.png'),

  }
  onPressButton = () => {
 

    this.setState({
      number: ++this.state.number,

    });
    this.state.number %2 ===0 ? this.setState({ image:require('./src/assets/LikeButton.png')}) : this.setState({ image: require('./src/assets/unlikeInstagram.png')})
    
  };

  render() {

    return (

      <SafeAreaView style={styles.cotainer} >
      
       

        <Text>{this.state.number}</Text>
       


        <TouchableOpacity onPress={this.onPressButton} title='like' >
          <Image
            style={styles.imageStyle}
            source={this.state.image}
          />
          <Text style={styles.buttonText} >Like</Text>


        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'column'

  },
  buttonText: {
    marginHorizontal: 30,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },
  imageStyle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'

  },
  

})
