import React from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Card, CardBody, CardTitle, CardText,
  Container, Row, Col,
} from 'reactstrap';

import InformationForm from './InformationForm';
import ProtocolForm from './ProtocolForm';
import CallTools from './CallTools';
import './CallReport.scss';

class CallReport extends React.Component {

  handleSubmit = () => {
    const {
      workerName,
      inputDate,
      startTime,
      endTime,
      callerPhoneNumber,
      callerLocation,
      emsDispatched,
    } = this.props;

    console.log(workerName, inputDate, startTime, endTime, callerPhoneNumber, callerLocation, emsDispatched);
  }

  render() {

    return (
      <Container className="CallReport" fluid>
        <Row className="header">
          <Col className="title"> Call Report </Col>
          <Col className="submit-report">
            <Button
              className="submit-report-button"
              onClick={() => this.handleSubmit()}>Submit Report
            </Button>
          </Col>
        </Row>
        <Row className="report-row">
          <Col className="information-col">
            <InformationForm />
          </Col>
          <Col className="protocol-col">
            <ProtocolForm/>
          </Col>
        </Row>
        <Row className="report-row">
          <Col className="aed-col">
            <Card>
              <CardBody>
                <CardTitle tag="h5"> AED Locator </CardTitle>
                <CardText> Is the person responsive? </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="tools-col">
            <Card>
              <CardBody>
                <CardTitle tag="h5"> Tools </CardTitle>
                <CallTools />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const ConnectedCallReport = connect(state => ({
  workerName: state.workerName,
  inputDate: state.inputDate,
  startTime: state.startTime,
  endTime: state.endTime,
  callerPhoneNumber: state.callerPhoneNumber,
  callerLocation: state.callerLocation,
  emsDispatched: state.emsDispatched,
}))(CallReport);

export default ConnectedCallReport;
