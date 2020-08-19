import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
