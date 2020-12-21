import React, { Component } from "react";
import { Container, Grid, Header, Image, Segment, Label, Button, Menu, Card, Progress} from 'semantic-ui-react'
import ModalExampleModal from './ModalExampleModal'
import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');

class Contribute extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: "25", value2: "28", value3: "30", value4: "32", showSetting: false, doSuggest: false, isVisible: false, word: "None", isModalVisible: false, activeItem: '1',
        // initial values (before communicating with server)
        word1: {
            appRate: 20.8, altList: { "객체": 16, "목표": 3}, modelConfidence: 16, comments: "In computer science, the word 'object' should be translated into another word than social science."
        },
        word2: {
            appRate: 60.4, altList: { "목표": 4, "물체": 1}, modelConfidence: 57, comments: "None"
        },
        word3: {
            appRate: 49.4, altList: { "객체": 12, "목적": 2, "물체": 2}, modelConfidence: 24, comments: "None"
        },
        word4: {
            appRate: 2, altList: { "객체": 1 }, modelConfidence: 0, comments: "None"
        }};
        this.report = this.report.bind(this);
        this.ptr = 4
        
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    report = (a) => {
        this.setState(() => ({
            isVisible: true
        }));
        this.setState(() => ({
            word: a
        }));
        if (a === "물체")
            this.ptr = 1;
        else if (a === "객체")
            this.ptr = 2;
        else if (a === "목표")
            this.ptr = 3;
        else
            this.ptr = 4;

    }
    stateisVisible = () => {
        return this.state.isVisible
    }

    statedoSuggest = () => {
        return this.state.doSuggest
    }

    stateshowSetting = () => {
        return this.state.showSetting
    }

    wordInformation = () => {
        if (this.ptr === 1)
            return this.state.word1
        if (this.ptr === 2)
            return this.state.word2
        if (this.ptr === 3)
            return this.state.word3
        if (this.ptr === 4)
            return this.state.word4
    }


    setting = (value) => {
        if (value === 0) {
            return (<p>그 뒤 하이퍼파라미터가 < Label color='purple' onClick={() => this.report('물체')
        }> 물체</Label > 에 들어가면 예측 결과값인 Y를 얻을 수 있습니다.</p>)
        }
        else if (value === 1) {
            return (<p>그 뒤 하이퍼파라미터가 < Label color='purple' onClick={() => this.report('객체')
        }> 객체</Label > 에 들어가면 예측 결과값인 Y를 얻을 수 있습니다.</p>)
        }
        else if (value === 2) {
            return (<p>그 뒤 하이퍼파라미터가 < Label color='purple' onClick={() => this.report('목표')
        }> 목표</Label > 에 들어가면 예측 결과값인 Y를 얻을 수 있습니다.</p>)
        }
        else if (value === 3) {
            return (<p>그 뒤 하이퍼파라미터가 < Label color='purple' onClick={() => this.report('NULL')
        }> NULL</Label > 에 들어가면 예측 결과값인 Y를 얻을 수 있습니다.</p>)
        }
        else { // default
            return (<p>그 뒤 하이퍼파라미터가 < Label color='red' onClick={() => this.report('목표')
        }> 목표</Label > 에 들어가면 예측 결과값인 Y를 얻을 수 있습니다.</p>)
        }
    }

    setting1 = (value) => {
        if (value >= parseInt("10", 10) && value <= parseInt("19", 10)) {
            return (<p>Physics</p>)
        }
        else if (value > parseInt("20", 10) && value <= parseInt("29", 10)) {
            return (<p>Computer Science</p>)
        }
        else {
            return (<p>Social Science</p>)
        }
    }
    setting2 = (value) => {
        if (value >= parseInt("0", 10) && value <= parseInt("7", 10)) {
            return (<p>Kindergarten</p>)
        }
        else if (value > parseInt("7", 10) && value <= parseInt("13", 10)) {
            return (<p>Elementary School</p>)
        }
        else if (value > parseInt("13", 10) && value <= parseInt("16", 10)) {
            return (<p>Middle School</p>)
        }
        else if (value > parseInt("17", 10) && value <= parseInt("19", 10)) {
            return (<p>High School</p>)
        }
        else if (value > parseInt("20", 10) && value <= parseInt("27", 10)) {
            return (<p>Bachelor</p>)
        }
        else if (value > parseInt("27", 10) && value <= parseInt("30", 10)) {
            return (<p>Master</p>)
        }
        else if (value > parseInt("30", 10) && value <= parseInt("43", 10)) {
            return (<p>Ph.D</p>)
        }
        else {
            return (<p>PostDoc</p>)
        }
    }
    setting3 = (value) => {
        if (value >= parseInt("0", 10) && value <= parseInt("8", 10)) {
            return (<p>Bachelor</p>)
        }
        else if (value > parseInt("9", 10) && value <= parseInt("15", 10)) {
            return (<p>Master</p>)
        }
        else if (value > parseInt("16", 10) && value <= parseInt("24", 10)) {
            return (<p>Ph.D</p>)
        }
        else if (value > parseInt("25", 10) && value <= parseInt("34", 10)) {
            return (<p>PostDoc</p>)
        }
        else {
            return (<p>Domain Experts</p>)
        }
    }
    setting4 = (value) => {
        if (value >= parseInt("10", 10) && value <= parseInt("15", 10)) {
            return (<p>Kindergarten</p>)
        }
        else if (value > parseInt("16", 10) && value <= parseInt("20", 10)) {
            return (<p>Elementary School</p>)
        }
        else if (value > parseInt("21", 10) && value <= parseInt("24", 10)) {
            return (<p>Middle School</p>)
        }
        else if (value > parseInt("25", 10) && value <= parseInt("30", 10)) {
            return (<p>High School</p>)
        }
        else {
            return (<p>College and Above</p>)
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        const agent = new https.Agent({
            rejectUnauthorized: false
        });

        var bodyFormData = new FormData();
        bodyFormData.append('domain', Math.floor((this.state.value1 - 10) * 2));
        bodyFormData.append('LearnerAge', Math.floor(this.state.value2 / 1));
        bodyFormData.append('LearnerLevel', Math.floor(this.state.value3 / 10));
        bodyFormData.append('ContributorLevel', Math.floor(this.state.value4 / 10));


        axios({
            method: 'post',
            url: 'http://143.248.247.64:52005/predictObject',
            headers: {'Content-Type': 'multipart/form-data', 'crossDomain': true},
            httpsAgent: agent,
            data: bodyFormData
          }).then(response =>  {
            console.log(response.data)
            const maxValue = Math.max(...response.data)
            const maxIndex = response.data.indexOf(maxValue)
            this.setState({value: maxIndex})
            this.setState(prevState => ({
                word1: {                   
                    ...prevState.word1,    
                    modelConfidence: Math.floor(response.data[0] * 100) / 1
                },
                word2: {                   
                    ...prevState.word2,    
                    modelConfidence: Math.floor(response.data[1] * 100) / 1
                },
                word3: {                   
                    ...prevState.word3,    
                    modelConfidence: Math.floor(response.data[2] * 100) / 1 
                },
                word4: {                   
                    ...prevState.word4,    
                    modelConfidence: Math.floor(response.data[3] * 100) / 1  
                },
            }))
          })
        .catch(error => {
            console.log(error)
          });
  
    }

    handleOnChange1 = (e) => this.setState({ value1: e.target.value })
    handleOnChange2 = (e) => this.setState({ value2: e.target.value })
    handleOnChange3 = (e) => this.setState({ value3: e.target.value })
    handleOnChange4 = (e) => this.setState({ value4: e.target.value })

    render() {
        const activeItem = this.state.activeItem

        return (
            <Container style={{ marginTop: '2em' }}>

                <Header as='h2' dividing>


                    Account Information
      </Header>


                <Card.Group>

                    <Card size="mini"
                        image='/meister.png'
                        header='"The Translation Master" Kim'
                        meta='A meister in translation'
                        description="네, 오늘 이 시간에는 16년 동안 전산학 관련 자료라면 무엇이든 한국어로 번역해오신 번역의 달인 '다비리' 김병만 선생님 모셨습니다."
                        extra={"567 reputation points (Ranked 0.229%)"}
                    />


                </Card.Group>

                <p>

                </p>

                <Header as='h2' dividing>
                    Contributing to improve computer science 101
      </Header>

                <p>
                    Thank you for the contributing in computer science 101 translation. We have a few things to get a help from you.
      </p>

                <div>
                    <Menu pointing secondary>
                        <Menu.Item
                            name='Human-AI interaction'
                            active={activeItem === '1'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Social Computing'
                            disabled
                            active={activeItem === '2'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Starcraft 101'
                            disabled
                            active={activeItem === '3'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment>

                        <Image src='/cs101.png' style={{ marginBottom: '1em' }} />

                        <Grid.Column>
                            <Segment raised>
                                <Label as='a' color='black' ribbon style={{ marginBottom: "1em" }}>
                                    English (Original)
        </Label>
                                <p>
                                The hyperparameter is then fed into the <Label color='red'>object</Label> to produce the predicted value Y.
                    </p>

                                <Label as='a' color='blue' ribbon style={{ marginBottom: "1em" }}>
                                    Korean (Translated)
        </Label>

                                <p>
                                    {this.setting(this.state.value)}
                                </p>
                            </Segment>
                        </Grid.Column>


                        <div style={{ display: this.stateisVisible() ? "block" : "None", marginTop: "1em" }}>

                            <Segment color="violet" textAlign="center">
                                <h3>Is the translation <Label color='black'>{this.state.word}</Label> appropriate?</h3>


                                <Grid columns={3} stackable centered>

                                    <Grid.Column>
                                        <h5>Student Response</h5>
                                        <Menu vertical style={{ width: "100%" }}>
                                            <Menu.Item
                                                name='Appropriate'
                                            >
                                                <p>Appropriate</p>
                                                <Progress percent={this.wordInformation().appRate} active color="blue" progress />

                                            </Menu.Item>

                                            <Menu.Item
                                                name='Inappropriate'
                                            >
                                                <p>Inappropriate</p>
                                                <Progress percent={100 - this.wordInformation().appRate} active color="red" progress />
                                            </Menu.Item>

                                        </Menu>

                                    </Grid.Column>

                                    <Grid.Column>
                                        <h5>Student Suggestions</h5>
                                        <Menu vertical style={{ width: "100%" }}>

                                            {Object.entries(this.wordInformation().altList).map(([key, value]) =>
                                                <Menu.Item>
                                                    <Label color='teal'>{value}</Label>
                                                    {key}
                                                </Menu.Item>
                                            )}

                                        </Menu>

                                    </Grid.Column>

                                    <Grid.Column>
                                        <h5>Other information</h5>
                                        <Grid centered style={{ width: "70%", margin: "0 auto" }}>

                                            <Grid columns={2} vertical stackable>


                                                <Grid.Row>

                                                    <h5>Model Confidence</h5>
                                                    <Progress percent={this.wordInformation().modelConfidence} active color="violet" centered progress style={{ width: "100%" }} />
                                                </Grid.Row>


                                                <Grid.Row>

                                                    <h5>Comments from experts</h5>
                                            <Segment style={{ width: "100%" }}>{this.wordInformation().comments}</Segment>

                                                </Grid.Row>

                                            </Grid>

                                        </Grid>

                                    </Grid.Column>

                                </Grid>



                                <h3>
                                    What is your opinion?
                       </h3>
                                <p>

                                <Button.Group>
                                        <Button positive>Appropriate</Button>
                                        <Button.Or /></Button.Group>
                                        <Button.Group onClick={() => this.setState({ doSuggest: true })}><ModalExampleModal text="Should be corrected" isContribute="1" /> 
  </Button.Group>

<p style={{margin: '1em'}}>
                                            <Button.Group onClick={() => this.setState({ doSuggest: true })}>
  <ModalExampleModal text="Not sure" isContribute="2" color="grey" /> 
  </Button.Group>
  </p>
                                
                                       
                                </p>
                            </Segment>


                        </div>

                    </Segment>
                </div>

                    <div style={{ display: this.statedoSuggest() ? "block" : "None", marginTop: "1em" }}>

                        <Segment color="violet" textAlign="center">
                            <h3>Would you like to change the translating settings?</h3>

                            <Button.Group>
                                <Button positive onClick={() => this.setState({ doSuggest: false })}>No, it's fine</Button>
                                <Button.Or />
                                <Button style={{ backgroundColor: "#8f1eb4", color: "#fff" }} onClick={() => this.setState({ showSetting: true, isVisible: false })}> Yes, please</Button>

                            </Button.Group>
                        </Segment>


                    </div>

                    <div style={{ display: this.stateshowSetting() ? "block" : "None", marginTop: "1em" }}>

                    <Segment color="violet" textAlign="center">
                        <h3>Try adjusting the parameter to change the setting</h3>
                        <div>
                            <div>
                                <p><b> Domain of the Excerpt </b></p>
                                <input type="range" min="10" max="39" value={this.state.value1} onChange={this.handleOnChange1} />
                                <div className="value">{this.setting1(this.state.value1)}</div>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <p><b> Peer Suggestion </b></p>
                                <input type="range" min="0" max="50" value={this.state.value2} onChange={this.handleOnChange2} />
                                <div className="value">{this.setting2(this.state.value2)}</div>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <p><b> Experts' Suggestion </b></p>
                                <input type="range" min="0" max="39" value={this.state.value3} onChange={this.handleOnChange3} />
                                <div className="value">{this.setting3(this.state.value3)}</div>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <p><b> Your Educational Background </b></p>
                                <p><i> Disclaimer: This is to provide personal suggestion tailored to your educational background, and moving this slider does not collect your personal information</i></p>
                                <input type="range" min="10" max="39" value={this.state.value4} onChange={this.handleOnChange4} />
                                <div className="value">{this.setting4(this.state.value4)}</div>
                            </div>
                            <Button style={{ backgroundColor: "#8f1eb4", color: "#fff", marginTop: "0.3em" }} onClick={this.submitHandler}> Check Translation Result </Button>
                            <ModalExampleModal text="Submit This!" isContribute="2" color="black" />
                        </div>


                    </Segment>


                    </div>



            </Container>

        );
    }
}

export default Contribute;


