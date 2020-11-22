import React, { Component } from "react";
import { Container, Grid, Header, Image, Segment, Label, Button, Menu, Card, Progress} from 'semantic-ui-react'
import ModalExampleModal from './ModalExampleModal'

class Contribute extends Component {
    constructor(props) {
        super(props);
        this.state = { doSuggest:false, isVisible: false, word: "None", isModalVisible: false, activeItem: '1' };
        this.report = this.report.bind(this);
        this.ptr = 1
        this.word1 = {
            appRate: 11, altList: { "양변": 276, "좌우변": 69, "좌변과 우변": 12 }, modelConfidence: 40.2, comments: "None"
        }
        this.word2 = {
            appRate: 14, altList: { "미분": 400, "편미분": 5 }, modelConfidence: 37.1, comments: "None"
        }
        this.word3 = {
            appRate: 84, altList: { "풀이": 15, "풀이과정": 12, "노가다": 1 }, modelConfidence: 88.2, comments: "None"
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    report = (a) => {
        this.setState(() => ({
            isVisible: true
        }));
        this.setState(() => ({
            word: a
        }));
        if (a === "양쪽")
            this.ptr = 1;
        else if (a === "구별화")
            this.ptr = 2;
        else
            this.ptr = 3;

    }
    stateisVisible = () => {
        return this.state.isVisible
    }

    statedoSuggest = () => {
        return this.state.doSuggest
    }

    wordInformation = () => {
        if (this.ptr === 1)
            return this.word1
        if (this.ptr === 2)
            return this.word2
        if (this.ptr === 3)
            return this.word3
    }


    render() {
        const activeItem = this.state.activeItem

        return (
            <Container style={{ marginTop: '2em' }}>

                <Header as='h2' dividing>


                    Account Information
      </Header>


                <Card.Group>

                    <Card size="mini"
                        image='/honeybee.png'
                        header='Bee Happy'
                        meta='A mathemathics teacher'
                        description='I am a mathematics teacher at Teemo Science High School. I have taught math for 19 years to 5,492 gifted students so far.'
                        extra={"567 reputation points (Ranked 0.229%)"}
                    />


                </Card.Group>

                <p>

                </p>

                <Header as='h2' dividing>
                    Contributing to improve mathematics 101
      </Header>

                <p>
                    Thank you for the contributing in mathematics 101 translation. We have a few things to get a help from you.
      </p>

                <div>
                    <Menu pointing secondary>
                        <Menu.Item
                            name='Differential Equations'
                            active={activeItem === '1'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Linear Algebra'
                            disabled
                            active={activeItem === '2'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Graph Theory'
                            disabled
                            active={activeItem === '3'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment>

                        <Image src='/dq.png' style={{ marginBottom: '1em' }} />

                        <Grid.Column>
                            <Segment raised>
                                <Label as='a' color='black' ribbon style={{ marginBottom: "1em" }}>
                                    English (Original)
        </Label>
                                <p>
                                    <Label color='red'>Differentiate</Label> the both <Label color='red'>sides</Label> of the equation and you'll get the answer. I'll leave detailed <Label color='teal'>calculation</Label> as your homework.
                    </p>

                                <Label as='a' color='blue' ribbon style={{ marginBottom: "1em" }}>
                                    Korean (Translated)
        </Label>

                                <p>
                                    <Label color='red' onClick={() => this.report('양쪽')}>양쪽</Label>을 <Label color='red' onClick={() => this.report('구별화')}>구별화</Label>하면 당신은 정답을 얻을 것입니다. 자세한 <Label color='teal' onClick={() => this.report('계산')}>계산</Label>은 숙제로 남겨두겠습니다.
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
                                    <Button.Group onClick={() => this.setState({ doSuggest: true })}>
    <ModalExampleModal text="Should be corrected" isContribute="1" /> 
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
                            <Button style={{ backgroundColor: "#8f1eb4", color: "#fff" }}>
                                Yes, please</Button>
                        </Button.Group>
                    </Segment>


                </div>




            </Container>

        );
    }
}

export default Contribute;


