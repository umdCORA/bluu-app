import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import './CallReport.scss';

class CallReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workerName: '',
      inputDate: '',
      startTime: '',
      endTime: '',
      callerPhoneNumber: {
        areaCode: '',
        telephonePrefix: '',
        lineNumber: '',
      },
      callerLocation: '',
      emsDispatched: '',
    };
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  handleNowStartTime = () => {
    const time = new Date();
    this.setState({ startTime: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })});
  }

  handleNowEndTime = () => {
    const time = new Date();
    this.setState({ endTime: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })});
  }

  render() {
    const {
      workerName,
      inputDate,
      startTime,
      endTime,
      callerPhoneNumber,
      callerLocation,
      emsDispatched,
    } = this.state;

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
            <Card>
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
                      onChange={(e) => this.setState({ workerName: e.target.value })}
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
                      onChange={(e) => this.setState({ inputDate: e.target.value })}
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
                              onChange={(e) => this.setState({ startTime: e.target.value })}
                            />
                            <Button
                              className="now-time-button"
                              onClick={() => this.handleNowStartTime()}
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
                              onChange={(e) => this.setState({ endTime: e.target.value })}
                            />
                            <Button
                              className="now-time-button"
                              onClick={() => this.handleNowEndTime()}
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
                              onChange={(e) => this.setState({ callerPhoneNumber: Object.assign({}, callerPhoneNumber, {areaCode: e.target.value})})}
                            />
                            <Input
                              className="phone-text-input"
                              type="text"
                              name="telephonePrefix"
                              id="telephonePrefix"
                              placeholder="999"
                              value={callerPhoneNumber.telephonePrefix}
                              onChange={(e) => this.setState({ callerPhoneNumber: Object.assign({}, callerPhoneNumber, {telephonePrefix: e.target.value})})}
                            />
                            <Input
                              className="phone-text-input"
                              type="text"
                              name="lineNumber"
                              id="lineNumber"
                              placeholder="9999"
                              value={callerPhoneNumber.lineNumber}
                              onChange={(e) => this.setState({ callerPhoneNumber: Object.assign({}, callerPhoneNumber, {lineNumber: e.target.value})})}
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
                            onChange={(e) => this.setState({ callerLocation: e.target.value })}
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
                            placeholder="Yes"
                            value={emsDispatched}
                            onChange={(e) => this.setState({ emsDispatched: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col className="protocol-col">
            <Card>
              <CardBody>
                <CardTitle tag="h5"> Protocol </CardTitle>
                <CardText> Is the person responsive? </CardText>
              </CardBody>
            </Card>
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
                <CardText> Metronome </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CallReport;
