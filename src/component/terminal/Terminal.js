import React, { Component, PropTypes } from 'react';
import Terminal from 'react-bash';

export const test = {
    exec: ({ structure, history, cwd }, command) => {
        return { structure, cwd, history: history.concat({ value: 'loading...' }) };
    },
};

export const test2 = {
    exec: ({ structure, history, cwd }, command) => {
        return { structure, cwd, history: history.concat({ value: 'loading... 2' }) };
    },
};

class terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cm: test,
            history: [{ value: 'Welcome to the my profile!' }].concat({ value: 'Please select a question below.' })
        }
    }

    componentWillReceiveProps = () => {
        //let _history = this.state.history.concat(this.props.history);
        //console.log(_history);
        //this.setState({ history: _history })
    };

    render() {
        //const { command } = this.props;
        //const _test = this.state.cm;
        const extensions = { test, test2 };
        console.log(extensions);
        //const { history= '' } = this.stage;
        const history = [{ value: 'Welcome to the my profile!' }].concat({ value: 'Please select a question below.' });
        return (
            <Terminal
                prefix={"portfolio"}
                theme={Terminal.Themes.DARK}
                history={history}
                extensions={extensions} />
        );
    }
}

terminal.propTypes = {

};

export default terminal;