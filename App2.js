
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App: () => React$Node = () => {
  return (
    <View style={styles.container} >
      <View style={styles.slideOne}>
        <Text>Merhaba side 1 </Text>
      </View>
      <View style={styles.slideTwo}>
        
        <View style={[styles.box , styles.box1]} >
          <Text>Box1</Text>
        </View>
        <View style={[styles.box , styles.box2]} >
          <Text>Box2</Text>
        </View>
        <View style={[styles.box , styles.box3]} >
          <Text>Box3</Text>
        </View>
        <View style={[styles.box , styles.box2]} >
          <Text>Box2</Text>
        </View>
      </View>

     
    </View>

  );
};
// flexDirection : ' row' verilierse birincil eksen yatay olur 'xcoloum' verilirse birincil eksen dikey olur
// justifyContent:Birirncil eksen elemanlarının nasıl konumlandırılcağını belirler.
// alignitmes : ikincil eksen elemanlarının nasıl konumlandırcağını belirler.

const styles = StyleSheet.create({
  container: {
 
    backgroundColor:'#FFEB3b',
    flex:1,
    
     },
  slideOne:{
    backgroundColor:'#607D8B',
    flex:1,
    flexDirection:'column',// ilk ekseni dikey
    justifyContent:'flex-end',// dikeyde  ortaladı
    alignItems:'center'// yatayda ortaladı

  },
  slideTwo:{
    backgroundColor:'#FF5722',
    flex:2,
    flexDirection:'row', // birincil eksen yatay.
    justifyContent:   "space-between",//yatayda ortaladı
    alignItems:"flex-start"//dikeyde ortaladı
   
   
  },
  box:{
    width:60,height:60,
 
  },
  box1:{backgroundColor:'#795551'},
  box2:{backgroundColor:'#9E9E9E'},
  box3:{backgroundColor:'#3F51B5'}


});

export default App;
