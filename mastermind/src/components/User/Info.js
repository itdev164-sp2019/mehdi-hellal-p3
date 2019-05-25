import React, { Component } from 'react'
import {BaseContainer } from '../Element'

let dialogStyles ={
    width: '500px',
    maxWidth: '100%',
    margin:'0 auto',
    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate (-50%,50%)',
    zIndex:'999',
    backgroundColor:'#eee',
    padding:'10px 20px 40px',
    borderRadius:'8%',
    display:'flex',
    flexDirection:'30px',
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
    alignSelf:'flex-end'
    
};


class Info extends Component {

    render() {
        let info =(
            <div style={dialogStyles}> 

            <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>X</button>
            
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