import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Gravatar } from 'react-native-gravatar'


export default props =>{
    return(
        <View style={styles.container}>
                <Gravatar options={props.options} style={styles.avatar} />
                <Text style={styles.nickname}>{props.name}</Text>
                <Text style={styles.email}>{props.email}</Text>
                <TouchableOpacity onPress={() => props.logout()} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname:{
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email:{
        marginTop: 20,
        fontSize: 25
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#fff'
    }
})