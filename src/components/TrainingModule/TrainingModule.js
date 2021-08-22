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
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [helperText1, setHelperText1] = useState('');
  const [helperText2, setHelperText2] = useState('');
  const [helperText3, setHelperText3] = useState('');
  const [helperText4, setHelperText4] = useState('');
  const [helperText5, setHelperText5] = useState('');

  const [question2, disableQuestion2] = useState(true);
  const [question3, disableQuestion3] = useState(true);
  const [question4, disableQuestion4] = useState(true);
  const [question5, disableQuestion5] = useState(true);

  // const onValChange = (e) => setName(e.target.value);
  const handleRadioChange1 = (e) => {
    setAnswer1(e.target.value);
    setHelperText1('Selected: ' + e.target.value);
  }

  const handleRadioChange2 = (e) => {
    setAnswer2(e.target.value);
    setHelperText2('Selected: ' + e.target.value);
  }

  const handleRadioChange3 = (e) => {
    setAnswer3(e.target.value);
    setHelperText3('Selected: ' + e.target.value);
  }

  const handleRadioChange4 = (e) => {
    setAnswer4(e.target.value);
    setHelperText4('Selected: ' + e.target.value);
  }

  const handleRadioChange5 = (e) => {
    setAnswer5(e.target.value);
    setHelperText5('Selected: ' + e.target.value);
  }

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    if (answer1 === 'question-1-answer-1') {
      setHelperText1('Correct');
      setError1(false);
      disableQuestion2(false);
    } else if (answer1 === 'question-1-answer-2') {
      setHelperText1('Incorrect');
      setError1(true);
      disableQuestion2(true);
    } else if (answer1 === 'question-1-answer-3') {
      setHelperText1('Incorrect');
      setError1(true);
    } else {
      setHelperText1('No answer selected');
      setError1(true);
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    if (answer2 === 'question-2-answer-1') {
      setHelperText2('Incorrect');
      setError2(true);
    } else if (answer2 === 'question-2-answer-2') {
      setHelperText2('Correct');
      setError2(false);
      disableQuestion3(false);
    } else if (answer2 === 'question-2-answer-3') {
      setHelperText2('Incorrect');
      setError2(true);
    } else {
      setHelperText2('No answer selected');
      setError2(true);
    }
  }

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    if (answer3 === 'question-3-answer-1') {
      setHelperText3('Incorrect');
      setError3(true);
    } else if (answer3 === 'question-3-answer-2') {
      setHelperText3('Incorrect');
      setError3(true);
    } else if (answer3 === 'question-3-answer-3') {
      setHelperText3('Correct');
      setError3(false);
      disableQuestion4(false);
    } else {
      setHelperText3('No answer selected');
      setError3(true);
    }
  }

  const handleSubmit4 = async (e) => {
    e.preventDefault();

    if (answer4 === 'question-4-answer-1') {
      setHelperText4('Correct');
      setError4(false);
      disableQuestion5(false);
    } else if (answer4 === 'question-4-answer-2') {
      setHelperText4('Incorrect');
      setError4(true);
    } else if (answer4 === 'question-4-answer-3') {
      setHelperText4('Incorrect');
      setError4(true);
    } else {
      setHelperText4('No answer selected');
      setError4(true);
    }
  }

  const handleSubmit5 = async (e) => {
    e.preventDefault();

    if (answer5 === 'question-5-answer-1') {
      setHelperText5('Incorrect');
      setError5(true);
    } else if (answer5 === 'question-5-answer-2') {
      setHelperText5('Correct');
      setError5(false);
    } else if (answer5 === 'question-5-answer-3') {
      setHelperText5('Incorrect');
      setError5(true);
    } else {
      setHelperText5('No answer selected');
      setError5(true);
    }
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
              <Accordion flush>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Greetings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleSubmit1}>
                    <FormControl component="fieldset" error={error1} className={classes.FormControl}>
                      <FormLabel component="legend">Sample Question 1</FormLabel>
                      <RadioGroup aria-label="question-1" name="question-1-answer" value={answer1} onChange={handleRadioChange1}>
                        <FormControlLabel value="question-1-answer-1" control={<Radio />} label="Answer 1" />
                        <FormControlLabel value="question-1-answer-2" control={<Radio />} label="Answer 2" />
                        <FormControlLabel value="question-1-answer-3" control={<Radio />} label="Answer 3" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                      </RadioGroup>
                      <FormHelperText>{helperText1}</FormHelperText>
                      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                        Check Answer
                      </Button>
                    </FormControl>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion flush disabled={question2}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Identifying CPR</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleSubmit2}>
                    <FormControl component="fieldset" error={error2} className={classes.FormControl}>
                      <FormLabel component="legend">Sample Question 2</FormLabel>
                      <RadioGroup aria-label="question-2" name="question-2-answer" value={answer2} onChange={handleRadioChange2}>
                        <FormControlLabel value="question-2-answer-1" control={<Radio />} label="Answer 1" />
                        <FormControlLabel value="question-2-answer-2" control={<Radio />} label="Answer 2" />
                        <FormControlLabel value="question-2-answer-3" control={<Radio />} label="Answer 3" />
                      </RadioGroup>
                    </FormControl>
                    <FormHelperText>{helperText2}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answer
                    </Button>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion flush disabled={question3}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>CPR Instructions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleSubmit3}>
                    <FormControl component="fieldset" error={error3} className={classes.FormControl}>
                      <FormLabel component="legend">Sample Question 3</FormLabel>
                      <RadioGroup aria-label="question-3" name="question-3-answer" value={answer3} onChange={handleRadioChange3}>
                        <FormControlLabel value="question-3-answer-1" control={<Radio />} label="Answer 1" />
                        <FormControlLabel value="question-3-answer-2" control={<Radio />} label="Answer 2" />
                        <FormControlLabel value="question-3-answer-3" control={<Radio />} label="Answer 3" />
                      </RadioGroup>
                    </FormControl>
                    <FormHelperText>{helperText3}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answer
                    </Button>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion flush disabled={question4}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography className={classes.heading}>Continuing CPR</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleSubmit4}>
                    <FormControl component="fieldset" error={error4} className={classes.FormControl}>
                      <FormLabel component="legend">Sample Question 4</FormLabel>
                      <RadioGroup aria-label="question-4" name="question-4-answer" value={answer4} onChange={handleRadioChange4}>
                        <FormControlLabel value="question-4-answer-1" control={<Radio />} label="Answer 1" />
                        <FormControlLabel value="question-4-answer-2" control={<Radio />} label="Answer 2" />
                        <FormControlLabel value="question-4-answer-3" control={<Radio />} label="Answer 3" />
                      </RadioGroup>
                    </FormControl>
                    <FormHelperText>{helperText4}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answer
                    </Button>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion flush disabled={question5}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography className={classes.heading}>CPR Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleSubmit5}>
                    <FormControl component="fieldset" error={error5} className={classes.FormControl}>
                      <FormLabel component="legend">Sample Question 5</FormLabel>
                      <RadioGroup aria-label="question-5" name="question-5-answer" value={answer5} onChange={handleRadioChange5}>
                        <FormControlLabel value="question-5-answer-1" control={<Radio />} label="Answer 1" />
                        <FormControlLabel value="question-5-answer-2" control={<Radio />} label="Answer 2" />
                        <FormControlLabel value="question-5-answer-3" control={<Radio />} label="Answer 3" />
                      </RadioGroup>
                    </FormControl>
                    <FormHelperText>{helperText5}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answer
                    </Button>
                  </form>
                </AccordionDetails>
              </Accordion>
            </CardBody>
          </Card>
        </Col>
        <Col className="training-audio">
          <AudioPlayer className="training-audio"
            src="16-Coaching.wav"
            type="audio/wav"
            showJumpControls={false}
            volume={1.0}

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
