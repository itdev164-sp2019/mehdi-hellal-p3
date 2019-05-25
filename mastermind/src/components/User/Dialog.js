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
      
            Instruction

            </Info>
            </div>
        );
    }

}

export default Dialog;