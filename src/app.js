import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/header';
import Main from './components/main';

const jsx = (
  <div>
    <Header />
    <Main />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));