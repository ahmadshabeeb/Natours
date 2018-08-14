import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/header';

const jsx = (
  <div>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));