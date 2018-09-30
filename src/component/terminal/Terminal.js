import React, { Component, PropTypes } from 'react';
import ReactTerminal from 'react-terminal-component';

class terminal extends Component {
    render() {
        return (
            <ReactTerminal theme={{
                background: '#151414',
                promptSymbolColor: '#00ff00',
                commandColor: '#00ff00',
                outputColor: '#00ff00',
                errorOutputColor: '#00ff00',
                fontSize: '1.1rem',
                spacing: '1%',
                fontFamily: 'monospace',
                height: '100'
              }}/>
        );
    }
}

terminal.propTypes = {

};

export default terminal;