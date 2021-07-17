import React from 'react';
import Metronome from '@kevinorriss/react-metronome'

class CallTools extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="CallTools">
        <Metronome/>
      </div>
    );
  }
}

export default CallTools;
