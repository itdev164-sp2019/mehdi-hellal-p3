import React, { Component } from 'react'
import Info from './Info'
import {Button} from '../../components/Element'
//import Dialog from './'

class Dialog extends Component {

    state={
        isOpen:false
    }
    render() {
        return(
            <div>
            <Button onClick ={(e) => this.setState({isOpen:true})}>Info</Button>
            
            <Info isOpen= {this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
      
           <p><b> Welcome To Mastermind.</b></p>
            <p>The goal of this game is gussing the right colors from 4 different selected colors.</p>
            <p>You have 10 attempts to guess and colors are not repeated in each row.</p><hr/>
           <p> First, select the color, then fill the spot.
            To check your guess, click on the check button on th right of the filed row.
            The left side is to help you gussing in the next row.</p>

            <p><b>Green:</b> you have a color placed in its right spot.(It can be any spot)<br/>
            <b>Orange:</b> You have one color that is not in its right spot.<br/>
            <b>White:</b> ther a color not found in the selection.</p>

            <p><b>Be Smart &amp; Good luck!</b></p>

            </Info>
            </div>
        );
    }

}

export default Dialog;