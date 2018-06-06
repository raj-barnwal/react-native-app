import React, {Component} from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';

export default class Cartoon extends Component{
    constructor(props){
        super(props);
        this.state={
            showText: true
        };
        var taskToDo = () => {
            this.setState(previousState => {
                return{
                    showText: !previousState.showText
                };
            })
        };
        const timeToBlink=1000;
        setInterval(taskToDo, timeToBlink);
    }
    render(){
        var cartoonImage = require ('./../../assets/cartoon.png');
        let textToDisplay = this.state.showText ? this.props.inputText : '';
        return(
            <View style={{alignItems: 'center'}}>
                <Image source={cartoonImage}/>
                <Text style={styles.blinkText}>{textToDisplay}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blinkText:{
        color:"#fff",
        fontSize:30
    }
});