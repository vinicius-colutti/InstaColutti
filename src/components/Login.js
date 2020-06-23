import React, {Component} from 'react'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Register from './Register'
import {connect} from 'react-redux'
import {login} from '../store/actions/user'


class Login extends Component{

    state = {
        register: false
    }

    render(){
        return(
            <View style={{flex: 1}}>
                {this.state.register ?
                    <Register setLogin={() => {this.setState({register: !this.state.register})}} />
                 :
                <View style={styles.container}>
                    <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.props.email}
                    onChangeText={email => this.props.setMail(email)}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        autoFocus={true} keyboardType='email-address'
                        value={this.props.password} secureTextEntry={true}
                        onChangeText={password => this.props.setPassword(password)}
                    />
                    <TouchableOpacity onPress={() => this.props.login()} style={styles.buttom}>
                        <Text style={styles.buttomText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({register: !this.state.register})}} style={styles.buttom}>
                        <Text style={styles.buttomText}>Criar nova conta</Text>
                    </TouchableOpacity>
                </View>
                }
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
        backgroundColor: '#42f6f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#fff'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})



export default Login