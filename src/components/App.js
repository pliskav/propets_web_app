import React, { Component } from 'react';

const obj = {
  name: 'Vova',
}
const counter = 0
export default class App extends Component {
render() {
    return (
      <div>
        <h1>
          `Hello, $
          {obj.name}
          `
        </h1>
      </div>
      );
    }
}
