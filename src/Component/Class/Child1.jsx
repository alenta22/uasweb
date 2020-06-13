import React, { Component } from 'react'

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
    return (<div>
        <h3>Child Component</h3>
        <p>Stok Produk : {this.props.stock}</p>
        <button>Beli</button>
        </div>
        )
    }
}

export default Child1;