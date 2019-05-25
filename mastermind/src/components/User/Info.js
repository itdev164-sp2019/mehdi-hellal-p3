import React, { Component } from 'react'
import {Button } from '../Element'


let dialogStyles ={
    width: '500px',
    height:'500px',
    //maxWidth: '100%',
    margin:'auto',
    position:'fixed',
    left:'5%',
    top:'30%',
    //transform:'translate (-50%,50%)',
    //zIndex:'999',
    backgroundColor:'#ffdc6b',
    padding:'20px 40px',
    borderRadius:'10%',
    //display:'flex',
    //flexDirection:'30px',
    //fontSize:'18px',
    lineHeight: '1.5',
};

let dialogCloseButtonStyles ={
    marginButton: '15px',
    padding : '3px 8px',
    cursor: 'pointer',
    borderRadius:'50%',
    border: 'none',
    width: '30px',
    height:'30px',
    fontWeight:'bold',
    float:'right',
    
};


class Info extends Component {

    render() {
        let info =(
            <div style={dialogStyles}> 

            <Button style={dialogCloseButtonStyles} onClick={this.props.onClose}>X</Button>
            
            <div>{this.props.children}</div>

            </div>
        );

        if(! this.props.isOpen) {
            info = null;
        }

        return(
            <div>{info}</div>          
            

        );
    }
}

export default Info;