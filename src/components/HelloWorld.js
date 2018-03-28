import React from 'react';
import {Button} from 'react-bootstrap';

class HelloWorld extends React.Component {
    render() {
        return (<div>
            <Button bsStyle="danger">这个世界好危险</Button>
            <Button bsStyle="primary">你好</Button>
            <Button bsStyle="success">成功了</Button>
        </div>);
    }
};
export default HelloWorld;