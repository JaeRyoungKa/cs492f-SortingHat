import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Header, Menu, Segment } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./about"
import Learn from "./learn"
import Contribute from "./contribute"
import PostForm from "./PostForm"

ReactDOM.render(
  <div>
    <Menu size='massive' fixed='top' color='grey'>
      <Container>
        <Menu.Item as='a' header href="/">
          ✏️🎓
          The Sorting Hat
        </Menu.Item>
        <Menu.Item as='a' href="/learn">Learn</Menu.Item>
        <Menu.Item as='a' href="/contribute">Contribute</Menu.Item>
        <Menu.Item as='a' href="/postForm">PostForm (debug)</Menu.Item>
        <Menu.Item position="right" disabled as='a'>Log in</Menu.Item>
      </Container>
    </Menu>
    <Container style={{ marginTop: '5.25em' }}>

      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/contribute">
              <Contribute />
            </Route>
            <Route path="/postForm">
              <PostForm />
            </Route>
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
          </Switch>
        </div>
      </Router>

    </Container>
    <Segment inverted vertical style={{ padding: '5em 0em', margin: '2em 0em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as='h4' inverted>
                The Sorting Hat
              </Header>
              <p>
                KAIST CS492 2020 Fall term project.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
