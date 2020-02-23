import React, { Component } from "react";
import Chirps from "./Chirps";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: ""
    };
  }
  render() {
    return (
      <div className='App'>
        <div className='container-sm'>
          <input type='text' placeholder='username' />
          <input type='text' placeholder='message' />
          <button type='button' className='btn btn-primary btn-sm'>
            {" "}
            Submit{" "}
          </button>
        <Chirps />
        </div>
      </div>
    );
  }
}
export default App;
