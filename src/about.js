import React, { Component } from "react";

import { Header } from 'semantic-ui-react'
 
class About extends Component {
  render() {
    return (
      <div>
        <Header as='h2' dividing>Welcome to the Sorting Hat!</Header>
        <p>
          Many students and instructors leverage auto-translators for studying, however, they often lack domain-specific knowledge which often leads to wrong terminologies and hinder the learning progress.
          Existing translation tools used to rely on community systems to fix awkward expressions, but such community systems showed shortcomings coming from them being not primarily designed to provide domain-specific word correction.
        In this work, we propose {'<'}The Sorting Hat{'>'} that leverages the power of users with a diverse level of domain expertise and lets them directly interact with the model to correct wrong terminologies in educational context in a fast and reliable way to overcome such issues.
          </p>
          <Header as='h2' dividing>Let's begin!</Header>
        <p>
          Select one of the menu above to begin your journey.</p>
      </div>
      
      
    );
  }
}
 
export default About;