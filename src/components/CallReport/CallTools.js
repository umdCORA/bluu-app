import React from 'react';
import { 
  Card, CardBody, CardTitle, CardSubtitle,
  Row, Col,
} from 'reactstrap';
import Metronome from '@kevinorriss/react-metronome'
import Timer from 'react-compound-timer';
import './CallTools.scss';

class CallTools extends React.Component {
  render() {
    return (
      <Card className="CallTools">
        <CardBody>
          <CardTitle tag="h5"> Tools </CardTitle>
          <CardSubtitle> Metronome </CardSubtitle>
          <Metronome/>
          <Row>
            <Col>
              <span> Timer </span>
              <Timer timeToUpdate={1000} lastUnit='s'>
                <div className="timer-text">
                  <Timer.Seconds formatValue={value => `${value}s `}/>
                  <Timer.Milliseconds formatValue={value => Math.floor(value/10)}/>
                </div>
              </Timer>
            </Col>
            <Col> 
              <span className="riskStatTitle"> Real-Time Risk </span>
              <h2 className="riskStat">1.5X</h2>
              <span> more likely to live </span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default CallTools;
