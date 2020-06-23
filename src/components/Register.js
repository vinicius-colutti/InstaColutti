import React, {Component} from 'react'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {createUser} from '../store/actions/user'
import {connect} from 'react-redux'

class Register extends Component{

    state = {
        name: '',
        email: '',
        password: ''
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input} autoFocus={true} value={this.state.name} onChangeText={name => this.setState({name: name})} />
                <TextInput keyboardType='email-address' placeholder='E-mail' style={styles.input} value={this.state.email} onChangeText={email => this.setState({email: email})} />
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.input} value={this.state.password} onChangeText={password => this.setState({password: password})} />
                <TouchableOpacity onPress={() => { this.props.onCreateUser(this.state)}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.setLogin()}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Realizar Login</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1, 
        borderColor: '#333',
        paddingLeft: 15
    }
})

const mapDispatchToProps = dispatch =>{
    return{
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register)