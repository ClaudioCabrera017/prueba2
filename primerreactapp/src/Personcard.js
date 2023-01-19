import React, { Component } from 'react';
    
    
class Personcard extends Component {
    render() {
        const { firstName, lastName ,edad, hair} = this.props;
    return (
            <div>
                <h1> { firstName} , { lastName }</h1> 
                <p> Age: {edad}</p>
                <p> Hair Color:{hair}</p>
            </div>
    );
}
}
    
export default Personcard;
