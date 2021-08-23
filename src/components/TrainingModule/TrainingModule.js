import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Button, ButtonGroup,
  Card, CardBody, CardTitle,
  Container, Row, Col,
  Form, Label, Input,
  Collapse
} from 'reactstrap';
import {
  Radio, RadioGroup,
  FormControlLabel, FormControl, FormLabel,
  Accordion, AccordionSummary, AccordionDetails,
  Typography,
  makeStyles,
  FormHelperText
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './TrainingModule.scss';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { setAnswer1 } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontStyle: theme.typography.fontStyle
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 1, 0, 0),
  }
}));

const TrainingModule = () => {
  // const [name, setName] = useState("Answer 1");
  const [examState, setExamState] = useState([
    {
      selectedAnswer: null,
      correctAnswer: 'Answer 1',
      disabled: false,
      error: '',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'],
      subject: 'Greetings',
      questionName: 'Sample Question 1',
      helperText: ''
    }, {
      selectedAnswer: null,
      correctAnswer: 'Answer 2',
      disabled: true,
      error: '',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'],
      subject: 'Identifying CPR',
      questionName: 'Sample Question 2',
      helperText: ''
    }, {
      selectedAnswer: null,
      correctAnswer: 'Answer 3',
      disabled: true,
      error: '',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'],
      subject: 'CPR Instructions',
      questionName: 'Sample Question 3',
      helperText: ''
    }, {
      selectedAnswer: null,
      correctAnswer: 'Answer 4',
      disabled: true,
      error: '',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'],
      subject: 'Continuing CPR',
      questionName: 'Sample Question 4',
      helperText: ''
    }, {
      selectedAnswer: null,
      correctAnswer: 'Answer 5',
      disabled: true,
      error: '',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'],
      subject: 'CPR Tools',
      questionName: 'Sample Question 5',
      helperText: ''
    }
  ])

  // const onValChange = (e) => setName(e.target.value);
  const handleRadioChange = questionIndex => (e) => {
    const newState = [...examState];
    newState[questionIndex].selectedAnswer = e.target.value;
    newState[questionIndex].helperText = 'Selected: ' + e.target.value;
    setExamState(newState);
  };

  const handleSubmit = questionIndex => (e) => {
    e.preventDefault();

    const { selectedAnswer, correctAnswer } = examState[questionIndex];
    console.log(selectedAnswer,correctAnswer);
    const newState = [...examState];
    if (selectedAnswer === correctAnswer) {
      newState[questionIndex].helperText = 'Correct';
      newState[Math.min(questionIndex+1,examState.length-1)].disabled = false;
      newState[questionIndex].error = false;
    } else if (selectedAnswer === '') {
      newState[questionIndex].helperText = 'No answer selected';
      newState[questionIndex].error = true;
    } else {
      newState[questionIndex].helperText = 'Incorrect';
      newState[questionIndex].error = true;
    }
    setExamState(newState);
  }

  const handleListen = e => {
    console.log(e.target.currentTime);
  }

  const classes = useStyles();

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
              {examState.map(({
                selectedAnswer,
                disabled,
                error,
                options,
                questionName,
                subject,
                helperText
              }, questionIndex) => (
              <Accordion flush disabled={disabled}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>{subject}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleSubmit(questionIndex)}>
                    <FormControl component="fieldset" error={error} className={classes.FormControl}>
                      <FormLabel component="legend">{questionName}</FormLabel>
                      <RadioGroup aria-label={`question-${questionIndex}`} name={`question-${questionIndex}-answer`} value={selectedAnswer} onChange={handleRadioChange(questionIndex)}>
                        {options.map(answerLabel => (
                          <FormControlLabel
                            value={answerLabel}
                            control={<Radio />}
                            label={answerLabel}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answer
                    </Button>
                  </form>
                </AccordionDetails>
              </Accordion>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col className="training-audio">
          <AudioPlayer className="training-audio"
            src="16-Coaching.wav"
            type="audio/wav"
            showJumpControls={false}
            volume={1.0}
            onListen={handleListen}
            listenInterval={100}

            onPlay={e => console.log("onPlay")}

          />
          <Card>
            <CardBody>
              Transcript
            </CardBody>
          </Card>
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
