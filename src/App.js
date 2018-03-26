import React from 'react';
import './assets/css/style.css';
import img from './assets/images/bg.jpg';
import Data from './assets/data/data.xml';
import log from './log.js';

class App extends React.Component {

    render() {
        log(Data);
        return <div className="hello">Hello World!</div>
    }
}

export default App