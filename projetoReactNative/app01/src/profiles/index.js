import React , { Component } from 'react';
import {
    View, 
    text, Stylesheet,
} from 'react-native';

export default class Post extends  Component {
    render(){
        return (<View style = {styles.container}>
            <Text>I,a a post Component</Text>
        </View>
        );
        
    }
}


const styles = Stylesheet.create({
    
})