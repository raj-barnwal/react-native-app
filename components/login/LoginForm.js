import React, {Component} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {FormLabel} from 'react-native-elements';
import Button from 'react-native-button';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'Please Type your text',
            typedPassword: '',
        }
    }

    render() {
        const onButtonPress = () => {
            Alert.alert("Login is not working, Sorry for inconvenience...")
        };
        return (
            <View style={styles.formcontrol}>
                <FormLabel labelStyle={styles.formlabel}>Email/User Name:</FormLabel>
                <TextInput style={styles.forminput} placeholder='Enter Email/User Name' underlineColorAndroid="transparent"
                           keyboardType='email-address'
                           onChangeText={
                               (text) => {
                                   this.setState(
                                       (previousState) => {
                                           return {
                                               typedText: text
                                           };
                                       }
                                   );
                               }
                           }
                           autoFocus={true}
                           autoCapitalize='none'
                           returnKeyType='next'
                           returnKeyLabel='next'
                           onSubmitEditing={() => {
                               this.nextInput.focus()
                           }}
                />
                {/*<Text style={{marginLeft:20, color:'#fff'}}>{this.state.typedText}</Text>*/}
                <FormLabel labelStyle={styles.formlabel}>Password:</FormLabel>
                <TextInput style={styles.forminput} placeholder='Enter Password' underlineColorAndroid="transparent"
                           keyboardType='default' secureTextEntry={true}
                           onChangeText={(text) => {
                               this.setState(() => {
                                   return {
                                       typedPassword: text
                                   }
                               })
                           }}
                           ref={nextInput => this.nextInput = nextInput}
                />
                <View style={styles.btnStyle}>
                    <Button onPress={onButtonPress} style={styles.button}>LOGIN</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formcontrol: {
        marginTop: 10,
        padding: 30,
        height: 300,
        borderBottomWidth: 2,
        borderBottomColor: '#f00'
    },
    formlabel: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 0
    },
    forminput: {
        paddingLeft: 3,
        paddingBottom: 5,
        color: '#fff',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
    btnStyle: {
        marginTop: 30,

    },
    button:{
        backgroundColor:'#070880',
        borderRadius:5,
        color:'#fff',
        height:40,
        letterSpacing:1.5,
        lineHeight:40,
    }
});
