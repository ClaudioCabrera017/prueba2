import React, { Component } from 'react';


class Todojunto extends Component {
    constructor (props){
        super(props);
        this.state={edad:this.props.edad}
        
    }
    masedad=()=>{

        return this.setState({edad:this.state.edad+1}) 
    }
    render() {
        const { firstName, lastName ,hair} = this.props
        
    return (
            <div>
                <h1> { firstName} , { lastName }</h1> 
                <p> Age: {this.state.edad}</p>
                <p> Hair Color:{hair}</p>
                <button onClick={this.masedad}>Birthday Button for { lastName } { firstName}</button>
            </div>
    );
    }
}

export default Todojunto; 