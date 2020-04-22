
import React, {Component} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        
        <View style= {styles.postContainer}>
          <Text style = {styles.postTitle}>Estudando React native</Text>
          <Text style = {styles.postDescription}>Leia mais .....</Text>

        </View>

        <View style= {styles.postContainer}>
          <Text style = {styles.postTitle}>Estudando React native</Text>
          <Text style = {styles.postDescription}>Leia mais .....</Text>

        </View>
        <View style= {styles.postContainer}>
          <Text style = {styles.postTitle}>Estudando React native</Text>
          <Text style = {styles.postDescription}>Leia mais .....</Text>

        </View>
        <View style= {styles.postContainer}>
          <Text style = {styles.postTitle}>Estudando React native</Text>
          <Text style = {styles.postDescription}>Leia mais .....</Text>

        </View>
        <View style= {styles.postContainer}>
          <Text style = {styles.postTitle}>Estudando React native</Text>
          <Text style = {styles.postDescription}>Leia mais .....</Text>

        </View>
        <View style= {styles.postContainer}>
          <Text style = {styles.postTitle}>Estudando React native</Text>
          <Text style = {styles.postDescription}>Leia mais .....</Text>

        </View>
          </ScrollView>
          
          
        
      
    );
  }
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    
    backgroundColor:"#333"
    
  }, 
  
  postContainer:{
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius:3
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  postDescription:{
    color:"#666",
  }
  
  
});


