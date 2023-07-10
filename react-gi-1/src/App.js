import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    const { name, number, dateOfBirth } = this.props;
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Number: {number}</p>
        <p>Date of Birth: {dateOfBirth}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Miguel Urdaneta',
        number: '1234567890',
        dateOfBirth: '2002-10-28',
      },
    };
  }

  render() {
    const { name, number, dateOfBirth } = this.state.person;

    return (
      <div>
        <BasicInfo name={name} number={number} dateOfBirth={dateOfBirth} />
      </div>
    );
  }
}

export default App;
