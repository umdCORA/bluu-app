import React from 'react';
import { connect } from 'react-redux'
import {
  Button, ButtonGroup,
  Card, CardBody, CardTitle,
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {
  setEmergencyType,
  setEmergencyAddress,
  setVictimAge,
  setIsVictimBreathing,
  setVictimBreathingDescription,
  setIsVictimChestRising,
} from '../../redux/actions';
import './ProtocolForm.scss';

class ProtocolForm extends React.Component {
  render() {
    const {
      dispatch,
      emergencyType,
      emergencyAddress,
      victimAge,
      isVictimBreathing,
      victimBreathingDescription,
      isVictimChestRising,
    } = this.props;

    const radios = [
      { name: 'Yes', value: true },
      { name: 'No', value: false },
    ];
    return (
      <Card className="ProtocolFormCard">
        <CardBody>
          <CardTitle tag="h5"> Protocol </CardTitle>
          <Form className="protocol-form">
            <FormGroup>
              <Label for="emergencyType"> 911 what is your emergency? </Label>
              <Input
                type="text"
                name="emergencyType"
                id="emergencyType"
                placeholder="Cardiac Arrest"
                value={emergencyType}
                onChange={(e) => dispatch(setEmergencyType(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="emergencyAddress"> What is the address of the emergency? </Label>
              <Input
                type="text"
                name="emergencyAddress"
                id="emergencyAddress"
                placeholder="67 E. Mayflower Ave. Gainesville, VA 20155"
                value={emergencyAddress}
                onChange={(e) => dispatch(setEmergencyAddress(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="victimAge"> How old is he/she? (Is it a child or an adult?) </Label>
              <Input
                type="text"
                name="victimAge"
                id="victimAge"
                placeholder="30"
                value={victimAge}
                onChange={(e) => dispatch(setVictimAge(e.target.value))}
              />
            </FormGroup>
            <FormGroup className="is-victim-breathing-form-group">
              <Label for="isVictimBreathing"> Is he/she breathing normally? </Label>
              <ButtonGroup className="is-victim-breathing-button-group" toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </FormGroup>
            <FormGroup>
              <Label for="victimBreathingDescription"> Can you describe the breathing sounds? </Label>
              <Input
                type="text"
                name="victimBreathingDescription"
                id="victimBreathing"
                placeholder="Shallow breathing"
                value={victimBreathingDescription}
                onChange={(e) => dispatch(setVictimBreathingDescription(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="isVictimChestRising"> Can you see the chest rising? </Label>
              <Input
                type="text"
                name="isVictimChestRising"
                id="isVictimChestRising"
                placeholder="No"
              />
            </FormGroup>
            <div> Can you put your phone next to his/her mouth so I can hear him/her breathing? </div>

            <br/>
            <div> Ok, he/she is not breathing normally. You need to start CPR. I will help you. An ambulance is on the way. </div>

            <br/>
            <div>
              Can you put your phone in speaker mode? Place the phone on the floor in front of you.
            </div>
            <br/>
            <div>
              Can you hear me?
            </div>
            <br/>
            <div>
              Listen carefully. Place the patient FLAT on his/her back on the floor and KNEEL by his/her side.
            </div>
            <br/>
            <div>
              Put the HEEL of your hand on the CENTER of the chest. Put your other hand on top of that hand.
            </div>
            <br/>
            <div>
              WITH YOUR ARMS STRAIGHT; PUSH DOWN HARD AND FAST WITH THE HEELS OF YOUR HANDS. Let the chest COME ALL THE WAY UP between pumps. Count together with me 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 .... keep going.
            </div>
            <br/>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const ConnectedProtocolForm = connect(state => ({
  emergencyType: state.emergencyType,
  emergencyAddress: state.emergencyAddress,
  victimAge: state.victimAge,
  isVictimBreathing: state.isVictimBreathing,
  victimBreathingDescription: state.victimBreathingDescription,
  isVictimChestRising: state.isVictimChestRising,
}))(ProtocolForm);

export default ConnectedProtocolForm;
