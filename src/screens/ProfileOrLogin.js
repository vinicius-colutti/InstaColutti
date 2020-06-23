import React, {Component} from 'react'
import Profile from '../components/Profile'
import Login from '../components/Login'
import {connect} from 'react-redux'
import {login, logout} from '../store/actions/user'


class ProfileOrLogin extends Component{

    state = {
        name: 'Temporario',
        email: '',
        password: '',
        logado: false,
        view: ''
    }


    componentDidUpdate = prevProps =>{
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({logado: true})
            this.props.navigation.navigate('Home');
        }
    }
    
    logout = () =>{
        this.props.onLogout()
        this.setState({logado: false})
    }   
    login = () =>{
        this.props.onLogin({...this.state})
    } 
    render(){
        const options = {email: this.props.email, secure: true}

        return(

            this.state.logado ?
             <Profile name={this.props.name} email={this.props.email} options={options} logout={this.logout} />
            :<Login 
                email={this.state.email} password={this.state.password}  setMail={email => this.setState({email: email})}
                setPassword={password => this.setState({password: password})}  login={this.login} />
            
           
        )
    }

}

const mapStateToProps = ({user}) =>{
    return{
        email: user.email,
        name: user.name,
        isLoading: user.isLoading 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onLogin: user => dispatch(login(user)),
        onLogout: () => dispatch(logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileOrLogin)