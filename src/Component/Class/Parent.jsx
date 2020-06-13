import React, { Component } from 'react'
import Child1 from './Child1';

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: 10 
        }
    }

    render() {
        return (
            <Child1 stock={this.state.stock}></Child1>
        )
    }
}

export default Parent