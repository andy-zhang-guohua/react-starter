import React from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './assets/data/data.xml';
import log from './log.js';
import logo from './assets/images/logo.png';
import carousel1 from './assets/images/carousel1.png';
import carousel2 from './assets/images/carousel2.png';
import carousel3 from './assets/images/carousel3.png';
import thumbnail from './assets/images/thumbnail.png';
import {Alert, Badge, Button, Carousel, Col, Grid, Image, Jumbotron, Row, Well,Panel,Label} from 'react-bootstrap';
import HelloWorld from './components/HelloWorld';
import AlertDismissable from './components/AlertDismissable';
import OverlaysExample from './components/OverlaysExample';
import ModalExample from "./components/ModalExample";
import CollapsiblePanelExample from "./components/CollapsiblePanelExample";
import PanelGroupsAccordionExample from "./components/PanelGroupsAccordionExample";
import ControlledTabsExample from "./components/ControlledTabsExample";

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
                    <div className={"pageTitleContainer"}><h1 className={"pageTitle"}>React + Bootstrap 功能演示应用</h1>
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
                <div className={""}>
                    标签效果
                    <Panel>
                        <Panel.Heading>在Panel内演示表现效果</Panel.Heading>
                        <Panel.Body>
                            <div>
                                <h1>
                                    Label <Label>New</Label>
                                </h1>
                                <h2>
                                    Label <Label>New</Label>
                                </h2>
                                <h3>
                                    Label <Label>New</Label>
                                </h3>
                                <h4>
                                    Label <Label>New</Label>
                                </h4>
                                <h5>
                                    Label <Label>New</Label>
                                </h5>
                                <p>
                                    Label <Label>New</Label>
                                </p>
                            </div>
                        </Panel.Body>
                    </Panel>
                </div>
            </Row>
            <Row className={"contentRow"}>
                <ModalExample/>
            </Row>
            <Row className={"contentRow"}>
                <Carousel>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <img width={900} height={500} alt="900x500" src={carousel1}/>
                            <Carousel.Caption>
                                <h3>图片尺寸</h3>
                                <p>这是轮播图第一张.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <img width={900} height={500} alt="900x500" src={carousel2}/>
                            <Carousel.Caption>
                                <h3>壮丽河山</h3>
                                <p>这是轮播图第二张.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={"carouselItemContentContainer"}>
                            <img width={900} height={500} alt="900x500" src={carousel3}/>
                            <Carousel.Caption>
                                <h3>比特币神话</h3>
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
                        <OverlaysExample/>
                    </p>
                </Jumbotron>
            </Row>
            <Row className={"contentRow"}>
                <div className={""}>
                    简单Panel效果
                    <Panel>
                        <Panel.Heading>Panel heading without a title</Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                </div>
            </Row>
            <Row className={"contentRow"}>
                可关闭Panel效果
                <CollapsiblePanelExample/>
            </Row>
            <Row className={"contentRow"}>
                手风琴效果
                <PanelGroupsAccordionExample/>
            </Row>
            <Row className={"contentRow"}>
                受控选项卡切换
                <ControlledTabsExample/>
            </Row>
            <Row className={"contentRow"}>
                <Well bsSize="large">
                    <div className={"centeredFlex"}>
                        <h1>这是一口方井</h1>
                    </div>
                </Well>
            </Row>
        </Grid>;
    }


}

export default App