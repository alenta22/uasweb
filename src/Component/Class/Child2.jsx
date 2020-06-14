import React, { Component } from 'react'

class Child2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
    return (
    <div>
        <h3>Child 2</h3>
        <p>{this.props.stock}</p>
        </div>
        )
    }
}

export default Child2;