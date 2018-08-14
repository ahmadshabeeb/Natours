import React from 'react';
import About from './about';
import Features from './features';
import Tours from './tours';
import Stories from './stories';
import Book from './book';

class Main extends React.Component {
    render() {
        return (
            <div>
                <About />
                <Features />
                <Tours />
                <Stories />
                <Book />
            </div>
        )
    }
}

export default Main;