import React,{Component} from 'react'
import {Text} from 'semantic-ui-react'

export default class Test extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        

        return(<Text>{this.props.phone}</Text>)
    }
}