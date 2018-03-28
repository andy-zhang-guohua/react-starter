import React from 'react';
import {Alert, Button} from 'react-bootstrap';

class AlertDismissable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        if (this.state.show) {
            return (<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                <h4>出错了!</h4>
                <p>
                    演示自定义的一个可关闭消息框
                </p>
                <p>
                    <Button bsStyle="danger">点击此按钮没有任何响应，仅演示用</Button>
                    <span> 或者 </span>
                    <Button onClick={this.handleDismiss}>关闭该警告消息框</Button>
                </p>
            </Alert>);
        }

        return <Button onClick={this.handleShow}>显示可关闭警告消息框</Button>;
    }
}

export default AlertDismissable;
