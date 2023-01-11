import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {counter: this.props.age}
    }
    add() {
        //Incrementamos el valor en 1 
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName}</h1> 
                <p>Age: {this.state.counter}</p>
                <p>Hair Color: {this.props.hair}</p>
                <button onClick = {this.add.bind(this)}  >Birthday Button for {this.props.button}</button>
            </div>
        );
    }
}
export default PersonCard;