// renders App.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import { HashRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';


const root = document.getElementById('root')

render(
  <StoreProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </StoreProvider>,
  root
);
