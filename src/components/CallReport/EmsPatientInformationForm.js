import React from 'react';
import { connect } from 'react-redux'
import {
  Card, CardBody, CardTitle,
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import {
  setPatientName,
  setAdmittingHospital,
  setPatientInformationNotes,
} from '../../redux/actions';
// import './EmsPatientInformationForm.scss';

class EmsPatientInformationForm extends React.Component {
  render() {
    const {
      dispatch,
      patientName,
      admittingHospital,
      patientInformationNotes,
    } = this.props;

    return (
      <Card className="EmsPatientInformationForm">
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
              <Label for="admittingHospital">Admitting Hospital</Label>
                <Input
                  className="admitting-hospital-input"
                  type="text"
                  name="admittingHospital"
                  id="admittingHospital"
                  value={admittingHospital}
                  onChange={(e) => dispatch(setAdmittingHospital(e.target.value))}
                />
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

const ConnectedEmsPatientInformationForm = connect(state => ({
  patientName: state.patientName,
  admittingHospital: state.admittingHospital,
  patientInformationNotes: state.patientInformationNotes,
}))(EmsPatientInformationForm);

export default ConnectedEmsPatientInformationForm;
