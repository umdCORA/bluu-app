import React from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Card, CardBody, CardTitle,
  Row, Col,
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import {
  setWorkerName,
  setInputDate,
  setStartTime,
  setEndTime,
  setCallerPhoneNumber,
  setCallerLocation,
  setEmsDispatched
} from '../../redux/actions';
import './InformationForm.scss';

class InformationForm extends React.Component {

  handleNowStartTimeClick = (e) => {
    const time = new Date();
    this.props.dispatch(setStartTime(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })));
  }

  handleNowEndTimeClick = (e) => {
    const time = new Date();
    this.props.dispatch(setEndTime(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })));
  }

  render () {

    const {
      dispatch,
      workerName,
      inputDate,
      startTime,
      endTime,
      callerPhoneNumber,
      callerLocation,
      emsDispatched,
    } = this.props;

    return (
      <Card className="InformationForm">
        <CardBody>
          <CardTitle tag="h5"> Information </CardTitle>
          <Form>
            <FormGroup>
              <Label for="workerName">Worker Name</Label>
              <Input
                type="text"
                name="workerName"
                id="workerName"
                placeholder="Enter Name"
                value={workerName}
                onChange={(e) => dispatch(setWorkerName(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="inputDate">Date</Label>
              <Input
                type="text"
                name="inputDate"
                id="inputDate"
                placeholder="MM/DD/YY"
                value={inputDate}
                onChange={(e) => dispatch(setInputDate(e.target.value))}
              />
            </FormGroup>
            <div className="time-container">
              <Row>
                <Col className="time-col">
                  <FormGroup>
                    <Label for="startTime">Start Time</Label>
                    <div className="time-flex-input">
                      <Input
                        type="text"
                        name="startTime"
                        id="startTime"
                        placeholder="6:37 PM"
                        value={startTime}
                        onChange={(e) => dispatch(setStartTime(e.target.value))}
                      />
                      <Button
                        className="now-time-button"
                        onClick={(e) => this.handleNowStartTimeClick(e)}
                      >
                        Now
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
                <Col className="time-col">
                  <FormGroup>
                    <Label for="endTime">End Time</Label>
                    <div className="time-flex-input">
                      <Input
                        type="text"
                        name="endTime"
                        id="endTime"
                        placeholder="7:37 PM"
                        value={endTime}
                        onChange={(e) => dispatch(setEndTime(e.target.value))}
                      />
                      <Button
                        className="now-time-button"
                        onClick={(e) => this.handleNowEndTimeClick(e)}
                      >
                        Now
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <div className="caller-information">
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="callerPhoneNumber">Caller Phone Number</Label>
                    <div className="phone-number-flex-input">
                      <Input
                        className="phone-text-input"
                        type="text"
                        name="areaCode"
                        id="areaCode"
                        placeholder="999"
                        value={callerPhoneNumber.areaCode}
                        onChange={(e) => dispatch(setCallerPhoneNumber(Object.assign({}, callerPhoneNumber, {areaCode: e.target.value})))}
                      />
                      <Input
                        className="phone-text-input"
                        type="text"
                        name="telephonePrefix"
                        id="telephonePrefix"
                        placeholder="999"
                        value={callerPhoneNumber.telephonePrefix}
                        onChange={(e) => dispatch(setCallerPhoneNumber(Object.assign({}, callerPhoneNumber, {telephonePrefix: e.target.value})))}
                      />
                      <Input
                        className="phone-text-input"
                        type="text"
                        name="lineNumber"
                        id="lineNumber"
                        placeholder="9999"
                        value={callerPhoneNumber.lineNumber}
                        onChange={(e) => dispatch(setCallerPhoneNumber(Object.assign({}, callerPhoneNumber, {lineNumber: e.target.value})))}
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="callerLocation">Caller Location</Label>
                    <Input
                      type="text"
                      name="callerLocation"
                      id="callerLocation"
                      placeholder="67 E. Mayflower Ave. Gainesville, VA 20155"
                      value={callerLocation}
                      onChange={(e) => dispatch(setCallerLocation(e.target.value))}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="emsDispatched">EMS Dispatched</Label>
                    <Input
                      type="text"
                      name="emsDispatched"
                      id="emsDispatched"
                      placeholder="111"
                      value={emsDispatched}
                      onChange={(e) => dispatch(setEmsDispatched(e.target.value))}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const ConnectedInformationForm = connect(state => ({
  workerName: state.workerName,
  inputDate: state.inputDate,
  startTime: state.startTime,
  endTime: state.endTime,
  callerPhoneNumber: state.callerPhoneNumber,
  callerLocation: state.callerLocation,
  emsDispatched: state.emsDispatched,
}))(InformationForm);

export default ConnectedInformationForm;
