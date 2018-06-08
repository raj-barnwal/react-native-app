import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

class FlatListItem extends Component{
    render(){
        return (
            <View style={{flex:1, backgroundColor: this.props.index % 2 ==0 ? '#3685ff':'#2e4080',

            }}>
               <View style={{padding:10}}>
                   <Text style={styles.flatlistStyle}>{this.props.item.id} . {this.props.item.name}</Text>
                   <Text style={styles.flatlistStyle}>Contact: <Text style={{fontWeight:'bold'}}>{this.props.item.phone}</Text></Text>
               </View>
            </View>
        )
    }
}


export default class UserList extends Component{
    state = {
        user_data: []
    };
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({
                    user_data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    // state = {
    //     emp_name_list: [
    //         {'name': 'Deepak Mittal', 'id': 1, 'designation':'CEO'},
    //         {'name': 'Narender Kumar', 'id': 2, 'designation':'EVP'},
    //         {'name': 'Divyanshu Bhushan', 'id': 3, 'designation':'AVP'},
    //         {'name': 'Jitender Chand', 'id': 4, 'designation':'ATL'},
    //         {'name': 'Md.Aarif', 'id': 5, 'designation':'SSE'},
    //         {'name': 'Arun Kumar', 'id': 6, 'designation':'SSE'},
    //         {'name': 'Raj Barnwal', 'id': 7, 'designation':'SE'},
    //         {'name': 'Agam Agarwal', 'id': 8, 'designation':'SE'},
    //         {'name': 'Arvind Choudhary', 'id': 9, 'designation':'SSE'},
    //         {'name': 'TTN All', 'id': 10, 'designation':'Newer'},
    //     ]
    // };
    render(){
        return(
            <View style={styles.userListContainer}>
                <Text style={styles.listTitle}>Newer List:</Text>
                {/*{*/}
                    {/*this.state.user_data.map((item, index) => (*/}
                    {/*<View key = {item.id} style = {styles.item}>*/}
                        {/*<Text>{item.id}.  {item.name}</Text>*/}
                        {/*<Text style={styles.contactDetails}> Contact - <Text style={{fontWeight:'bold'}}>{item.phone}</Text></Text>*/}
                    {/*</View>*/}
                    {/*))*/}
                {/*}*/}
                <FlatList
                    data={this.state.user_data}
                    renderItem={({item,index})=>{
                        return(
                            <FlatListItem index={index} item={item} />
                        )
                    }}
                    keyExtractor={(item, index) => index}
                >

                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    userListContainer: {
      backgroundColor:'#fff'
    },
    item: {
        flex:1,
        padding: 30,
        marginBottom: 15,
        backgroundColor: '#d2f7f1',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 6,
        elevation: 5,
    },
    contactDetails:{
       paddingLeft:15
    },
    listTitle:{
        color:'#040080',
        fontSize:18,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10
    },
    flatlistStyle:{
        color:'#fff',
        paddingBottom:5,
        fontSize:16
    }
})