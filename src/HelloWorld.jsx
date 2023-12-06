import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
        	/*'TODO (HelloWorld): Add a line such that "Hello World!" is displayed on your webpage!*/
            <h1><u>Hello World!, {this.props.name}</u></h1>
        );
    }
}

export default HelloWorld;