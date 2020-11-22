import React, { Component, useState } from "react";
import { Container, Grid, Header, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import ModalExampleModal from './ModalExampleModal'

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "50", showSetting: false, doSuggest: false, isVisible: false, word: "None", isModalVisible: false };
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

    handleOnChange = (e) => this.setState({ value: e.target.value })

    render() {

        function setting(value) {
            if (value>="0" && value<= "33") {
                return (<p> 강의를 재개합니다.우리가 방금 다룬 < Label color='red' onClick={() => this.report('기능')
                }> 기능</Label > 은 < Label color='red' onClick={() => this.report('진짜 숫자')
                }> 진짜 숫자</Label > 를 입력받아 그 < Label color='teal' onClick={() => this.report('제곱의 값')
                }> 제곱의 값</Label > 을 반환합니다. </p>)
            }
            else if (value > "33" && value <= "67") {
                return (<p>강의를 재개합니다.우리가 방금 다룬 < Label color='red' onClick={() => this.report('기능')
                }> 기능</Label > 은 < Label color='red' onClick={() => this.report('실수')
                }> 실수</Label > 를 입력받아 그 < Label color='teal' onClick={() => this.report('제곱의 값')
                }> 제곱의 값</Label > 을 반환합니다.</p>)
            }
            else  {
                return (<p>강의를 재개합니다.우리가 방금 다룬 < Label color='red' onClick={() => this.report('함수')
                }> 함수</Label > 은 < Label color='red' onClick={() => this.report('실수')
                    }> 실수</Label > 를 입력받아 그 < Label color='teal' onClick={() => this.report('제곱의 값')
                    }> 제곱의 값</Label > 을 반환합니다.</p>)
            }
        }

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
                            Let's resume the lecture. The <Label color='red'>function</Label> f(x) we took a look at takes a <Label color='red'>real number</Label> and returns its <Label color='teal'>sqaured value</Label>.
                    </p>

                        <Label as='a' color='blue' ribbon style={{ marginBottom: "1em" }}>
                            Korean (Translated)
        </Label>

                        
                            {setting(this.state.value)}
       
                    </Segment>
                </Grid.Column>


<div style={{ display: this.stateisVisible() ? "block" : "None", marginTop: "1em"}}>
    
                <Segment color="violet" textAlign="center">
                    <h3>Did you find the translation of <span class="ui black label">{this.state.word}</span> inappropriate?</h3>
                        
                    <Button.Group>
    <Button positive>No, it's appropriate</Button>
    <Button.Or /></Button.Group>
                        <Button.Group onClick={() => this.setState({ doSuggest: true })}><ModalExampleModal text="Yes, mark it as dubious" isContribute="0" /> 
  </Button.Group>
  <p style={{margin: '1em'}}>
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
                            <Button.Or/>
                            <Button style={{ backgroundColor: "#8f1eb4", color: "#fff" }} onClick={() => this.setState({ showSetting: true })}> Yes, please</Button>
                       
                        </Button.Group>
                    </Segment>


                </div>

                <div style={{ marginTop: "1em" }}>

                    <Segment color="violet" textAlign="center">
                        <h3>Try adjusting the parameter to change the setting</h3>
                        <div>
                            <input type="range" min="0" max="100" value={this.state.value} onChange={this.handleOnChange} />
                            <div className="value">{this.state.value}</div>
                        </div>
                        
                        
                    </Segment>


                </div>


            </Container>

        );
    }
}

export default Learn;


