import { combineReducers, createStore } from 'redux';

import {
  accountType,
  callerPhoneNumber,
  callerLocation,
  emsDispatched,
  callInformationNotes,
  emergencyType,
  emergencyAddress,
  victimAge,
  isVictimBreathing,
  victimBreathingDescription,
  isVictimChestRising,
  patientName,
  patientOutcome,
  patientInterestedInInterview,
  patientPreferredContactMethod,
  patientInformationNotes,
  admittingHospital,
} from './reducers.js';

const rootReducer = combineReducers({
  accountType,
  callerPhoneNumber,
  callerLocation,
  emsDispatched,
  callInformationNotes,
  emergencyType,
  emergencyAddress,
  victimAge,
  isVictimBreathing,
  victimBreathingDescription,
  isVictimChestRising,
  patientName,
  patientOutcome,
  patientInterestedInInterview,
  patientPreferredContactMethod,
  patientInformationNotes,
  admittingHospital,
});

const store = createStore(
  rootReducer,
);

export default store;
