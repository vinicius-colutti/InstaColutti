import React, {Component} from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from 'react-redux'
import {addComment} from '../store/actions/posts'
Icon.loadFont();

class AddComment extends Component{
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () =>{
        
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })

        this.setState({comment: '', editMode: false})
        
    }

    render(){
        let commentArea = null
        if(this.state.editMode){
            commentArea = (
                <View style={styles.container}>
                    <TextInput
                     placeholder='Adicione um comentário...'
                      style={styles.input} autoFocus={true}
                      value={this.state.comment}
                     onChangeText={comment => this.setState({comment: comment})}  onSubmitEditing={this.handleAddComment} />
                     <TWF onPress={() => this.setState({editMode: false})}>
                        <Icon name="times" size={15} color="#A6A6A6" />
                     </TWF>
                </View>
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({editMode: true})}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={25} color="#A6A6A6" />
                    </View>
                </TWF>
            )
        }

        return(
            <View style={{flex: 1}}>
                {commentArea}
            </View>
        )

    }

}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption:{
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input:{
        width: '90%'
    }
})

const mapStateToProps  = ({ user }) =>{
    return{
        name: user.name
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddComment: payload => dispatch(addComment(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)