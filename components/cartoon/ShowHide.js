import React, {Component} from 'react';
import {View} from 'react-native';
import Cartoon from "./Cartoon";


export default class ShowHide extends Component{
    render(){
        return(
            <View>
                <Cartoon inputText="Bye Bye"/>
            </View>
        )
    }
}