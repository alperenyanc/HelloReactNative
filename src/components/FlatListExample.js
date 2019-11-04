import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, SafeAreaView, FlatList,Alert } from 'react-native';

import data from '../../data';


export default class FlatListExample extends Component {

  state={
    text:'',
    contacts:data,
  }
 

  _renderContactsItem = ({ item, index }) => {
    return (
      <TouchableOpacity
      style={[styles.itemContainer,{backgroundColor:index %2 === 1 ? '#cdcdcd':''}]}
        onPress={this._onClickItem=()=>{
        Alert.alert(
          item.name,item.company,
          )
      }}  >
        <Image
          style={styles.avatar}
          source={{ uri: item.picture }}
        />
        <View style={styles.textConatiner} >
          <Text style={styles.name} >{item.name}</Text>
          <Text style={styles.company} >{item.company}</Text>
        </View>

      </TouchableOpacity>
    )
   
  }

  serachFilter=text =>{
    const newData=data.filter(item=> {
      const ListItem=`${item.name.toLocaleLowerCase()} ${item.company.toLocaleLowerCase()}; `
      return ListItem.indexOf(text.toLocaleLowerCase()) >-1; 
    });
    this.setState({
      contacts:newData
    });
  };

  renderHeader=()=>{
    const {text} = this.state;
    return(
      <View
      style={styles.searchContainer} >
        <TextInput 
        onChangeText={text=>{
          this.setState({
            text
          });
          this.serachFilter(text);
        }}
        value={text}
        placeholder={" Search .."} style={styles.searchInput}/>
      </View>
    )
  }

  render() {

    return (

        <FlatList  
        ListHeaderComponent={this.renderHeader()}
        
        // horizontal={true} pagingEnabled={true}

          renderItem={this._renderContactsItem}
          keyExtractor={(item) => item._id}
          data={this.state.contacts} />


    )
  }
}
const styles = StyleSheet.create({

  itemContainer: {
   flex:1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    
  
    

  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
    marginHorizontal:10,

    
  },
  textConatiner:{
    justifyContent:'space-between',
    
  },
  searchContainer:{
    padding:10,
  },
  searchInput:{
    fontSize:16,
    backgroundColor:'#f9f9f9',
    padding:10
  }
  



})
