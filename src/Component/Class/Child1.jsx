import React, { Component } from 'react'

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
    return (<div><p>{this.props.stock}</p></div>

        )
    }
}

export default Child1;