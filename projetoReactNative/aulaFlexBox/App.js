

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View,Text} from 'react-native';



//const App= () => (
 // <View style={styles.container}>
   // <View style={styles.header}>
   // <Text> Voltar</Text>  
    //<Text>Titulo</Text>
    //<Text>Perfil</Text>
    //</View>
    //</View>
//) ;

export default class flexDirectionBasics extends Component{

  render(){
    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>

        </View>
    );
  };


};

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row', //colocando  row elementos alinahdos em linha, column: alinha itens de cima para baixo
    backgroundColor: '#CCC',
    flex: 1,
    //alignItems: 'center', //alinhamento sempre oposto ao do flexdirection, funciona apenas com itens em uma linha
    //justifyContent: 'space-around',
    //flexWrap: 'wrap',
    //alignContent: 'space-between', //distribui elementos através da tela
    
    
    
  },

  /* box:{
    height: 100,
    flex: 1, //elemento box é fleixvel, muda  a largura para caber sempre dentro do container
    width: 100,
    backgroundColor: '#FF0000',
    borderColor: '#666',
    borderWidth: 5,
    margin: 10,
    minWidth: 100
  }, */

  header:{
    height: 60,
    paddingTop: 20,paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  }
  
});


