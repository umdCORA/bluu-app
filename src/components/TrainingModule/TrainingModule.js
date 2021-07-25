import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Button, ButtonGroup,
  Card, CardBody, CardTitle,
  Container, Row, Col,
  Form, FormGroup, RadioGroup, Label, Input,
  Collapse
} from 'reactstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './TrainingModule.scss';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { setAnswer1 } from '../../redux/actions';

const TrainingModule = () => {
  const [name, setName] = useState("Answer 1");

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onValChange = (e) => setName(e.target.value);

  return (
    <Container className="training-module">
      <Row className="header">
        <Col className="title"> Training Module</Col>
      </Row>
      <Row className="training-prompt-row">
        <Col className="training-col">
          <Card className="training">
            <CardTitle tag="h5"> Training </CardTitle>
            <CardBody>
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}> Question 1</Button>
              <Collapse isOpen={isOpen}>
                <Form>
                  {/* <FormGroup>
                    <Label for="question1"> Question 1? </Label>
                    <ToggleButtonGroup
                      name="question1-button-group"
                      className="question1-button-group"
                      defaultValue={answer1}
                    >
                      <ToggleButton
                        className="answer1-choice1"
                        value={true}
                        onClick={() => dispatch(setAnswer1(true))}
                      >
                        ABCD
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <input type="radio" value="option1" checked={true} />
                  </FormGroup> */}
                  <label>
                    <input
                      type="radio"
                      value="Answer 1"
                      checked={name === "Answer 1"}
                      onChange={onValChange} />
                    <span>Answer 1</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Answer 2"
                      checked={name === "Answer 2"}
                      onChange={onValChange} />
                    <span>Answer 2</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Answer 3"
                      checked={name === "Answer 3"}
                      onChange={onValChange} />
                    <span>Answer 3</span>
                  </label>
                </Form>
              </Collapse>

            </CardBody>
          </Card>
        </Col>
        <Col className="training-audio">
          <AudioPlayer className="training-audio"
            src="LMAO.mp3"
            type="audio/mpeg"
            showJumpControls={false}
            volume={0.1}

            onPlay={e => console.log("onPlay")}

          />
        </Col>
      </Row>
    </Container >
  );
};

// onSetAnswerOne(answer) {
//   this.setState({
//     answer1: false
//   })
// }
/*
  const Player = () => (
    <AudioPlayer className="training-audio"
      src="bruh.mp3"
      type="audio/mpeg"
      showJumpControls={false}
 
      onPlay={e => console.log("onPlay")}
 
    />
  )
*/

/*
const ConnectedTrainingModule = connect(state => ({

}))(TrainingModule);
*/
export default TrainingModule;
