import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component {
    render() {
        const {text, backgroundColor}=this.props;
       
        return (
            <View style={[styles.cardContainer ,{backgroundColor} ]} >
            <Text style={styles.cardText} >{text}</Text>
          </View>
        )
    }
}

Card.propTypes ={
text:PropTypes.string.isRequired,
backgroundColor:PropTypes.string
};

const styles = StyleSheet.create({
    cardContainer:{
        borderWidth:2,
        borderColor:'black',
        padding:10,
    
      },
      cardText:{
        fontSize:22
      }
})