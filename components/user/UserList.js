import React, {Component} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.id });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'Yes', onPress: () => {
                                        this.props.data.splice(this.props.index, 1);
                                        //Refresh FlatList !
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }},
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };

        return (
            <Swipeout {...swipeSettings}>
                <View style={{flex:1, backgroundColor: this.props.index % 2 ==0 ? '#3685ff':'#2e4080',

                }}>
                   <View style={{padding:10}}>
                       <Text style={styles.flatlistStyle}>{this.props.item.id} . {this.props.item.name}</Text>
                       <Text style={styles.flatlistStyle}>Contact: <Text style={{fontWeight:'bold'}}>{this.props.item.phone}</Text></Text>
                   </View>
                </View>
            </Swipeout>
        )
    }
}


export default class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            user_data: []
        });
    }
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);

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
                            <FlatListItem data={this.state.user_data} index={index} item={item} parentFlatList={this} />
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}  //It resolved key map with unique identification
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