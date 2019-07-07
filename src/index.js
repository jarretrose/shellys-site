// renders App.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import { HashRouter, BrowserRouter } from 'react-router-dom';


const root = document.getElementById('root')

render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  root
);