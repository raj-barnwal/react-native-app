import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LoginForm from './components/login/LoginForm';
import ShowHide from './components/cartoon/ShowHide';
import UserList from './components/user/UserList';

export default class App extends Component {
    render() {
        let newer=`Raj Barnwal`;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.heading}>Welcome {newer}</Text>
                    <Text style={styles.info}>Please login to view more information.</Text>
                    <LoginForm/>
                    <UserList/>
                    <ShowHide/>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop:30
    },
    heading: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20,
        borderBottomColor:'#f00',
        borderBottomWidth:2,
        height:40,
        lineHeight:40,
        flex:15,
        backgroundColor:'#ddd'
    },
    info:{
        color:'#3eff06',
        paddingLeft:30,
        paddingTop:20,
        paddingBottom:20
    }
});
