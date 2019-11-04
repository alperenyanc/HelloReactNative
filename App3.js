import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Card from './src/components/card';

export default class App extends Component {
  state = {
    name: 'alperen',
    number: 0
  };

  onPressDetail = () => {
    alert('alp detail');
  }
  onPressChangeName = () => {
    this.setState({
      name: 'mehmet'
    });
  };
  onPressPlus = () => {
    this.setState({
      number: ++this.state.number
    })
  }
  onPressMinus = () => {
    this.setState({
      number: --this.state.number
    })
  }
  /*
  yeniden boyutlandırma metotlar
  -contain => resmin tamamını görürsünüz fakat border kısmına tam oturmaz
  -cover=> resim tam oturur ama hepsini göremezsiniz.
  - center=> ortalam işlemi yapar
  -repeat=> resimleri tekrarlar boşlukları öyle kapatır.
  - stretch=> orantısız tam bordera sığdırır. resmi bozabilir.
  
  */

  render() {
    return (
      <View style={styles.cotainer} >
        {/* <Image
        source={require('./src/assets/platform.png')}
        
        
        /> */}

        <Image
          resizeMode={'cover'}
          style={{ width: '100%', height: 500, borderWidth:3, borderColor:'red' }}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/PIA17172_-_The_Day_the_Earth_Smiled.jpg' }} />


        <View>
          <Text>{this.state.name}</Text>
        </View>
        <View>
          <Text style={styles.texts} >{this.state.number}</Text>
        </View>


        <Card text='merhaba alp' backgroundColor='blue' />
        <View style={styles.buttons}>
          <Button
            title='arttır'
            color='green'
            onPress={this.onPressPlus}
          />
          <Button
            title='azalt'
            color='green'
            onPress={this.onPressMinus}
          />
        </View>

        <Button
          title='new button'
          color='#000'

          onPress={this.onPressDetail}
        />
        <Button
          title='change name'
          color='pink'
          onPress={this.onPressChangeName}
        />




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
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',


  },
  texts: {
    fontSize: 44,
  }


})
