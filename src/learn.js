import React, { Component } from "react";
import { Container, Grid, Header, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import ModalExampleModal from './ModalExampleModal'

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false, word: "None", isModalVisible: false };
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
                            Let's resume the lecture. The <Label color='red'>function</Label> f(x) we took a look at takes a <Label color='red'>real number</Label> and returns its <Label color='teal'>sqaured value</Label>.
                    </p>

                        <Label as='a' color='blue' ribbon style={{ marginBottom: "1em" }}>
                            Korean (Translated)
        </Label>

                        <p>
                            강의를 재개합니다. 우리가 방금 다룬 <Label color='red' onClick={() => this.report('기능')}>기능</Label>은 <Label color='red' onClick={() => this.report('진짜 숫자')}>진짜 숫자</Label>를 입력받아 그 <Label color='teal' onClick={() => this.report('제곱의 값')}>제곱의 값</Label>을 반환합니다.
       </p>
                    </Segment>
                </Grid.Column>


<div style={{ display: this.stateisVisible() ? "block" : "None", marginTop: "1em"}}>
    
                <Segment color="violet" textAlign="center">
                    <h3>Did you find the translation of <span class="ui black label">{this.state.word}</span> inappropriate?</h3>
                        
                    <Button.Group>
    <Button positive>No, it's appropriate</Button>
    <Button.Or />
    <ModalExampleModal text="Yes, mark it as dubious" isContribute="0" /> 
  </Button.Group>
                </Segment>
                
                
</div>


            </Container>

        );
    }
}

export default Learn;


