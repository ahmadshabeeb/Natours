import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const jsx = (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));