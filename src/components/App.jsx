import React, { Component } from "react";
import Chirps from "./Chirps";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: [
        {
          name: 'Jessica Jones',
          message: 'look out for purple man'
        },
        {
          name: 'Jon Hamm',
          message: 'Lucky strike man'
        },
        {
          name: 'Megan Markle',
          message: 'Hello there'
        },
      ],
      name: "",
      message: ""
    };
  }
  onChangeName = value => {
    this.setState({ name: value });
  };
  onChangeMessage = value => {
    this.setState({ message: value });
  };

  handleClick() {
    const newChirp = {
      name: this.state.name,
      message: this.state.message
    }
    this.setState({ chirps: [...this.state.chirps, newChirp] })
  }
  render() {
    return (
      <div className='App'>
        <div className='container-sm'>
          <input
            type='text'
            placeholder='username'
            value={this.state.name}
            onChange={event => this.onChangeName(event.target.value)}
          />
          <input
            type='text'
            placeholder='message'
            value={this.state.message}
            onChange={event => this.onChangeMessage(event.target.value)}
          />
          <button type='button' className='btn btn-primary btn-sm' onClick={() => this.handleClick()}>
            Add Chirp
          </button>
          {this.state.chirps.map(chirp => {
            return <Chirps chirp={chirp} />
          })}
        </div>
      </div>
    );
  }
}
export default App;
