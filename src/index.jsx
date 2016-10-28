import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Crud from './Crud';
import Store from './Store';

const store = new Store;

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider>
                <Crud store={store} />
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById("app"));
