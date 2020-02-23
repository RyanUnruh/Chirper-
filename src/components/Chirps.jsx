import React, { Component } from "react";

export class Chirps extends Component {
  render() {
    return (
      <div className='msg'>
        <h3>this.state.name</h3>
        <p>this.state.message</p>
      </div>
    );
  }
}

export default Chirps;
