// renders App.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

const root = document.getElementById('root')

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  root
);
