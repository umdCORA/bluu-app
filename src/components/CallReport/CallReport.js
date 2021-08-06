import React from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Container, Row, Col,
} from 'reactstrap';

import {
  OPERATOR_ACCT,
} from '../../utils/Constants';

import CallTools from './CallTools';
import InformationForm from './InformationForm';
import ProtocolForm from './ProtocolForm';
import ReportLogs from './ReportLogs';
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

  renderReport = () => {
    const { accountType } = this.props;
    switch(accountType) {
      case OPERATOR_ACCT:
        return (
          <Row className="report-row">
          <Col>
          <ProtocolForm/>
          </Col>
          <Col>
          <CallTools/>
          <InformationForm/>
          </Col>
          </Row>
        );
      default:
        return (
          <div> wtf </div>
        );
    }
  }

  render() {

    return (
      <Container className="CallReport" fluid>
        <Row className="header-row">
          <Col className="title"> Call Report </Col>
          <Col className="submit-report">
            <Button
              className="submit-report-button"
              onClick={() => this.handleSubmit()}>
                Submit Report
            </Button>
          </Col>
        </Row>
        {this.renderReport()}
      </Container>
    );
  }
}

const ConnectedCallReport = connect(state => ({
  accountType: state.accountType,
  workerName: state.workerName,
  inputDate: state.inputDate,
  startTime: state.startTime,
  endTime: state.endTime,
  callerPhoneNumber: state.callerPhoneNumber,
  callerLocation: state.callerLocation,
  emsDispatched: state.emsDispatched,
}))(CallReport);

export default ConnectedCallReport;
