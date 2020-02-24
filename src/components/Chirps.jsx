import React from "react";

let Chirps = props => {
  return (
    <div className='msg'>
      <h3>{props.chirp.name}</h3>
      <p>{props.chirp.message}</p>
    </div>
  );
}

export default Chirps;
