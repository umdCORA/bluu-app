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
  makeStyles
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
  }
}));

const TrainingModule = () => {
  const [name, setName] = useState("Answer 1");

  const [value, setValue] = useState('female');

  const onValChange = (e) => setName(e.target.value);
  const handleChange = (e) => setValue(e.target.value);

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
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Greetings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography> */}
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sample Question 1</FormLabel>
                    <RadioGroup aria-label="question-1" name="question-1-answer" value={value} onChange={handleChange}>
                      <FormControlLabel value="question-1-answer-1" control={<Radio />} label="Answer 1" />
                      <FormControlLabel value="question-1-answer-2" control={<Radio />} label="Answer 2" />
                      <FormControlLabel value="question-1-answer-3" control={<Radio />} label="Answer 3" />
                      <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Identifying CPR</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Sample Question 2</FormLabel>
                    <RadioGroup aria-label="question-2" name="question-2-answer" value={value} onChange={handleChange}>
                      <FormControlLabel value="question-2-answer-1" control={<Radio />} label="Answer 1" />
                      <FormControlLabel value="question-2-answer-2" control={<Radio />} label="Answer 2" />
                      <FormControlLabel value="question-2-answer-3" control={<Radio />} label="Answer 3" />
                      <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>CPR Instructions</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography className={classes.heading}>Continuing CPR</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography className={classes.heading}>CPR Tools</Typography>
                </AccordionSummary>
              </Accordion>
              {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}> Question 1</Button> */}
              {/* <Collapse isOpen={isOpen}>
                <Form>
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
              </Collapse> */}

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
