import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import createFinalStore from './store';
import App from "./container/App";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Theme from './theme';

const store = createFinalStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);