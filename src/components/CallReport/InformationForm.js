import React from 'react';
import { connect } from 'react-redux'
import {
  Card, CardBody, CardTitle,
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import {
  setCallerPhoneNumber,
  setCallerLocation,
  setEmsDispatched,
  setCallInformationNotes,
} from '../../redux/actions';
import './InformationForm.scss';

class InformationForm extends React.Component {

  render () {
    const {
      dispatch,
      callerPhoneNumber,
      callerLocation,
      emsDispatched,
      callInformationNotes,
    } = this.props;

    return (
      <Card className="InformationForm">
        <CardBody>
          <CardTitle tag="h5"> Call Information (Optional) </CardTitle>
          <Form className="information-form">
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
            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                type="textarea"
                name="notes"
                id="notes"
                value={callInformationNotes}
                onChange={(e) => dispatch(setCallInformationNotes(e.target.value))}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const ConnectedInformationForm = connect(state => ({
  callerPhoneNumber: state.callerPhoneNumber,
  callerLocation: state.callerLocation,
  emsDispatched: state.emsDispatched,
  callInformationNotes: state.callInformationNotes,
}))(InformationForm);

export default ConnectedInformationForm;
