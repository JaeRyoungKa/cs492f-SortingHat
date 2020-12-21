import React, { Component } from "react";
import { Container, Grid, Header, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import ModalExampleModal from './ModalExampleModal'
import PostForm from './PostForm';
import PostList from './PostList';
import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: "15", value2: "18", value3: "29", value4: "27", value: -1, showSetting: false, doSuggest: false, isVisible: false, word: "None", isModalVisible: false };
        this.report = this.report.bind(this);
    }
    report = (a) => {
        this.setState(() => ({
            isVisible: true
        }));
        this.setState(() => ({
            word: a
        }));
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

    setting = (value) => {
        if (value === 0) {
            return (<p> 강의를 재개합니다.우리가 방금 다룬 < Label color='purple' onClick={() => this.report('함수')
            }> 함수</Label > f(x) 는 실수를 입력받아 그 제곱의 값을 반환합니다. </p>)
        }
        else if (value === 1) {
            return (<p>강의를 재개합니다.우리가 방금 다룬 < Label color='purple' onClick={() => this.report('기능')
            }> 기능</Label > f(x) 는 실수를 입력받아 그 제곱의 값을 반환합니다.</p>)
        }
        else if (value === 2) {
            return (<p>강의를 재개합니다.우리가 방금 다룬 < Label color='purple' onClick={() => this.report('동작')
            }> 동작</Label > f(x) 는 실수를 입력받아 그 제곱의 값을 반환합니다.</p>)
        }
        else if (value === 3) {
            return (<p>강의를 재개합니다.우리가 방금 다룬 < Label color='purple' onClick={() => this.report('NULL')
            }> NULL</Label > f(x) 는 실수를 입력받아 그 제곱의 값을 반환합니다.</p>)
        }
        else { // default
            return (<p>강의를 재개합니다.우리가 방금 다룬 < Label color='red' onClick={() => this.report('동작')
            }> 동작</Label > f(x) 는 실수를 입력받아 그 제곱의 값을 반환합니다.</p>)
        }
    }

    setting1 = (value) => {
        if (value >= parseInt("10", 10) && value <= parseInt("19", 10)) {
            return (<p>Mathematics</p>)
        }
        else if (value > parseInt("20", 10) && value <= parseInt("29", 10)) {
            return (<p>Social Science</p>)
        }
        else {
            return (<p>General</p>)
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
        bodyFormData.append('domain', Math.floor(this.state.value1 / 10));
        bodyFormData.append('LearnerAge', Math.floor(this.state.value2 / 1));
        bodyFormData.append('LearnerLevel', Math.floor(this.state.value3 / 10));
        bodyFormData.append('ContributorLevel', Math.floor(this.state.value4 / 10));

        axios({
            method: 'post',
            url: 'http://143.248.247.64:52005/predict',
            headers: {'Content-Type': 'multipart/form-data', 'crossDomain': true},
            httpsAgent: agent,
            data: bodyFormData
          }).then(response =>  {
            console.log(response.data)
            const maxValue = Math.max(...response.data)
            const maxIndex = response.data.indexOf(maxValue)
            this.setState({value: maxIndex})
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


        return (
            <Container style={{ marginTop: '2em' }}>

                <Header as='h2' dividing>


                    Account Information
      </Header>

                <Card.Group>

                    <Card size="mini"
                        image='/teemo.jpg'
                        header='Teemo'
                        meta='A high school student'
                        description='Hello, I am from Teemo Science High School. Nice to meet you.'
                        extra={"11 reputation points (Ranked 67.229%)"}
                    />


                </Card.Group>


                <Header as='h2' dividing>
                    Mathematics 101
      </Header>

                <p>
                    Welcome back, Teemo! Let's continue to watch the video from introduction to calculus.
      </p>

                <Image src='/math101example.png' style={{ marginBottom: '1em' }} />

                <Grid.Column>
                    <Segment raised>
                        <Label as='a' color='red' ribbon style={{ marginBottom: "1em" }}>
                            English (Original)
        </Label>
                        <p>
                            Let's resume the lecture. The <Label color='red'>function</Label> f(x) we took a look at takes a real number and returns its sqaured value.
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
                        <h3>Did you find the translation of <span class="ui black label">{this.state.word}</span> inappropriate?</h3>

                        <Button.Group>
                            <Button positive>No, it's appropriate</Button>
                            <Button.Or /></Button.Group>
                        <Button.Group onClick={() => this.setState({ doSuggest: true })}><ModalExampleModal text="Yes, mark it as dubious" isContribute="0" />
                        </Button.Group>
                        <p style={{ margin: '1em' }}>
                            <Button.Group onClick={() => this.setState({ doSuggest: true })}>
                                <ModalExampleModal text="Not sure" isContribute="2" color="grey" />
                            </Button.Group>
                        </p>
                    </Segment>


                </div>

                <div style={{ display: this.statedoSuggest() ? "block" : "None", marginTop: "1em" }}>

                    <Segment color="violet" textAlign="center">
                        <h3>Would you like to change the translating settings?</h3>

                        <Button.Group>
                            <Button positive onClick={() => this.setState({ doSuggest: false })}>No, it's fine</Button>
                            <Button.Or />
                            <Button style={{ backgroundColor: "#8f1eb4", color: "#fff" }} onClick={() => this.setState({ showSetting: true })}> Yes, please</Button>

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

export default Learn;


