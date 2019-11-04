import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import Card from './src/components/card';

export default class App extends Component {
  state = {
    name: ''

  };
  // _OnChangeText=text=>{
  //   this.setState({
  //     name:text
  //   });
  // };


  onPressButton = () => {
    alert('alp')

  };
  render() {
    const { name } = this.state;
    return (

      <View style={styles.cotainer} >
        <Text>{name}</Text>
        <TextInput
        keyboardAppearance='dark'
        
        autoCapitalize='characters'

          value={name}
          placeholder='bir isim giriniz'
          // onChangeText={text=>{this.setState({
          //   name:text
          // })}}
          onChangeText={name => {
            this.setState({
              name,
            })
          }}
          style={styles.myInput} />

        {/* <TextInput
          secureTextEntry={true}
          editable={false}
          value={name}
          placeholder='şifrenizi giriniz'
          // onChangeText={text=>{this.setState({
          //   name:text
          // })}}
          onChangeText={name => {
            this.setState({
              name,
            })
          }}
          style={styles.myInput} /> */}

        <TouchableOpacity style={{ marginBottom: 40 }} >
          <View style={styles.buttonCotainer} >

            <Text style={styles.buttonTitle} >my button </Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressButton} >
          <Image
            style={{ width: 100, height: 100 }}
            source={require('./src/assets/button.png')} />

        </TouchableOpacity>




      </View>
    )
  }
}
const styles = StyleSheet.create({
  cotainer: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 10
  },
  buttonTitle: {
    fontSize: 24,

  },
  buttonCotainer: {
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 15
  },
  myInput: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: 'gray'
  },


})
