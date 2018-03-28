import React from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './assets/data/data.xml';
import log from './log.js';
import logo from './assets/images/logo.png';
import {Alert, Button, Col, Grid, Row} from 'react-bootstrap';
import HelloWorld from './components/HelloWorld';
import AlertDismissable from './components/AlertDismissable';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showAlertDismissable: false
        }
        ;
        this.toggleAlertDismissable = this.toggleAlertDismissable.bind(this);
    }

    componentDidMount() {
        log("生命周期方法:componentDidMount");
        log(Data);
    }

    toggleAlertDismissable() {
        if (this.state.showAlertDismissable)
            this.setState({showAlertDismissable: false});
        else
            this.setState({showAlertDismissable: true});
    }

    render() {
        return <div className="mainContainer">
            <Grid>
                <Row className={"headerRow"}>
                    <Col xs={6} md={4} className={"headerCol"}><img className="logo" src={logo} alt="Logo"/></Col>
                    <Col xs={6} md={8} className={"headerCol"}>
                        <div className={"pageTitleContainer"}><h1 className={"pageTitle"}>React + Bootstrap功能演示应用</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div>
                        下面三个按钮是放到一起的一个自定义React组件:
                        <HelloWorld/>
                    </div>

                    <Alert bsStyle="warning">
                        <strong>注意:</strong> 这里演示一个不可关闭的消息框
                    </Alert>

                    <div>
                        <Button bsStyle="primary" onClick={this.toggleAlertDismissable}>显示/隐藏一个警告消息框</Button>
                        <span>{'点击一下这个按钮，看看会发生什么?'}</span>
                    </div>
                </Row>
                {(this.state.showAlertDismissable) ? <AlertDismissable/> : null}
            </Grid>
        </div>;
    }
}

export default App