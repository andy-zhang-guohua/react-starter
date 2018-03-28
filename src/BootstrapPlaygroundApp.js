import React from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './assets/data/data.xml';
import log from './log.js';
import logo from './assets/images/logo.png';
import carousel from './assets/images/carousel.png';
import thumbnail from './assets/images/thumbnail.png';
import {Alert, Badge, Button, Col, Grid, Row, Carousel, Image, Jumbotron} from 'react-bootstrap';
import HelloWorld from './components/HelloWorld';
import AlertDismissable from './components/AlertDismissable';
import OverlaysExample from './components/OverlaysExample';

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
        return <Grid>
            <Row className={"headerRow"}>
                <Col xs={6} md={4} className={"headerCol"}><img className="logo" src={logo} alt="Logo"/></Col>
                <Col xs={6} md={8} className={"headerCol"}>
                    <div className={"pageTitleContainer"}><h1 className={"pageTitle"}>React + Bootstrap功能演示应用</h1>
                    </div>
                </Col>
            </Row>
            <Row className={"contentRow"}>
                <div>
                    下面三个按钮是放到一起的一个自定义React组件:
                    <HelloWorld/>
                </div>
            </Row>
            <Row className={"contentRow"}>
                <Alert bsStyle="warning">
                    <strong>注意:</strong> 这里演示一个不可关闭的消息框
                </Alert>
            </Row>
            <Row className={"contentRow"}>
                <div>
                    <Button bsStyle="primary" onClick={this.toggleAlertDismissable}>显示/隐藏一个警告消息框</Button>
                    <span>{'点击一下这个按钮，看看会发生什么?'}</span>
                </div>
                {(this.state.showAlertDismissable) ? <AlertDismissable/> : null}
            </Row>
            <Row className={"contentRow"}>
                <p>
                    Badges <Badge>42</Badge>
                </p>
            </Row>
            <Row className={"contentRow"}>
                <Carousel>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <img width={900} height={500} alt="900x500" src={carousel}/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>这是轮播图第一张.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <img width={900} height={500} alt="900x500" src={carousel}/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>这是轮播图第二张.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <img width={900} height={500} alt="900x500" src={carousel}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>这是轮播图第三张.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <span>还能显示点什么?</span>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>这是轮播图第四张.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className={"contentRow"}>
                <Col xs={6} md={4}>
                    <Image src={thumbnail} rounded/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={thumbnail} circle/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={thumbnail} thumbnail/>
                </Col>
            </Row>
            <Row className={"contentRow"}>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <OverlaysExample />
                    </p>
                </Jumbotron>
            </Row>
        </Grid>;
    }
}

export default App