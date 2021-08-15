import React from 'react';
import { connect } from 'react-redux'
import {
  Card, CardBody, CardTitle,
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {
  setPatientName,
  setPatientOutcome,
  setPatientInterestedInInterview,
  setPatientPreferredContactMethod,
  setPatientInformationNotes,
} from '../../redux/actions';
import {
  PHONE,
  EMAIL,
} from '../../utils/Constants';
import './HospitalPatientInformationForm.scss';

class HospitalPatientInformationForm extends React.Component {
  render() {
    const {
      dispatch,
      patientName,
      patientOutcome,
      patientInterestedInInterview,
      patientPreferredContactMethod,
      patientInformationNotes,
    } = this.props;

    return (
      <Card className="HospitalPatientInformationForm">
        <CardBody>
          <CardTitle tag="h5"> Patient Information </CardTitle>
          <Form className="patient-information-form">
            <FormGroup>
              <Label for="patientName">Patient Name</Label>
                <Input
                  className="patient-name-input"
                  type="text"
                  name="patientName"
                  id="patientName"
                  value={patientName}
                  onChange={(e) => dispatch(setPatientName(e.target.value))}
                />
            </FormGroup>
            <FormGroup>
              <Label for="patientOutcome">Patient Outcome</Label>
                <Input
                  className="patient-outcome-input"
                  type="text"
                  name="patientOutcome"
                  id="patientOutcome"
                  value={patientOutcome}
                  onChange={(e) => dispatch(setPatientOutcome(e.target.value))}
                />
            </FormGroup>
            <FormGroup className="patient-interested-in-interview-form-group">
              <Label for="patientInterestedInInterview"> Is the patient willing to be interviewed as a success story? </Label>
              <ToggleButtonGroup
                  name="interview-button-group"
                  className="interview-button-group"
                  defaultValue={patientInterestedInInterview}
              >
                  <ToggleButton
                    className="interview-button"  
                    value={true}
                    onClick={() => dispatch(setPatientInterestedInInterview(true))}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    className="interview-button"          
                    value={false}
                    onClick={() => dispatch(setPatientInterestedInInterview(false))}
                  > 
                    No 
                  </ToggleButton>
              </ToggleButtonGroup>
            </FormGroup>
            <FormGroup>
              <Label for="patient-preferred-contact-method"/>
                <Label for="patientContactMethod">Patient preferred method of contact?</Label>
                <Input
                  className="patient-contact-method"
                  type="select"
                  name="patientContactMethod"
                  id="patientContactMethod"
                  value={patientPreferredContactMethod}
                  onChange={(e) => dispatch(setPatientPreferredContactMethod(e.target.value))}
                >
                  <option>{PHONE}</option>
                  <option>{EMAIL}</option>
                </Input>
            </FormGroup> 
            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                type="textarea"
                name="notes"
                id="notes"
                value={patientInformationNotes}
                onChange={(e) => dispatch(setPatientInformationNotes(e.target.value))}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const ConnectedHospitalPatientInformationForm = connect(state => ({
  patientName: state.patientName,
  patientOutcome: state.patientOutcome,
  patientInterestedInInterview: state.patientInterestedInInterview,
  patientPreferredContactMethod: state.patientPreferredContactMethod,
  patientInformationNotes: state.patientInformationNotes,
}))(HospitalPatientInformationForm);

export default ConnectedHospitalPatientInformationForm;
