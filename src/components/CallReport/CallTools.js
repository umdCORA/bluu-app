import React from 'react';
import Form from 'react-bootstrap/Form';

class CallTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bpm: 120 };
  }

  handleChange = e => {
    this.setState({bpm: e.target.value});
  }

  render() {
    return(
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group controlId="metronomeForm">
          <Form.Label>Metronome</Form.Label>
          <Form.Control
            type="number"
            min={100}
            max={140}
            value={this.state.bpm}
            onChange={this.handleChange}
          />
          <Form.Control
            type="range"
            min={100}
            max={140}
            value={this.state.bpm}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default CallTools;
