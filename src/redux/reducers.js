import { handleActions } from 'redux-actions';
import {
  OPERATOR_ACCT,
  CALL_CENTER_ADMIN_ACCT,
  QI_ADMIN_ACCT,
  EMS_ACCT,
  EMS_ADMIN_ACCT,
  HOSPITAL_ACCT,
  HOSPITAL_ADMIN_ACCT,
  PHONE,
  EMAIL,
} from '../utils/Constants'

import {
  SET_ACCOUNT_TYPE,
  SET_CALLER_PHONE_NUMBER,
  SET_CALLER_LOCATION,
  SET_EMS_DISPATCHED,
  SET_CALL_INFORMATION_NOTES,
  SET_EMERGENCY_TYPE,
  SET_EMERGENCY_ADDRESS,
  SET_VICTIM_AGE,
  SET_IS_VICTIM_BREATHING,
  SET_VICTIM_BREATHING_DESCRIPTION,
  SET_IS_VICTIM_CHEST_RISING,
  SET_PATIENT_NAME,
  SET_PATIENT_OUTCOME,
  SET_PATIENT_INTERESTED_IN_INTERVIEW,
  SET_PATIENT_PREFERRED_CONTACT_METHOD,
  SET_PATIENT_INFORMATION_NOTES,
  SET_ADMITTING_HOSPITAL,
} from './actions';


const identityReducer = (actionName, initialState) => handleActions({
  [actionName]: (_, action) => action.payload
}, initialState);

const defaultPhoneNumber = {
  areaCode: '',
  telephonePrefix: '',
  lineNumber: '',
};

// InformationForm variables
export const accountType = identityReducer(SET_ACCOUNT_TYPE, OPERATOR_ACCT);
export const callerPhoneNumber = identityReducer(SET_CALLER_PHONE_NUMBER, defaultPhoneNumber);
export const callerLocation = identityReducer(SET_CALLER_LOCATION, '');
export const emsDispatched = identityReducer(SET_EMS_DISPATCHED, '');
export const callInformationNotes = identityReducer(SET_CALL_INFORMATION_NOTES, '');
export const emergencyType = identityReducer(SET_EMERGENCY_TYPE, '');
export const emergencyAddress = identityReducer(SET_EMERGENCY_ADDRESS, '');
export const victimAge = identityReducer(SET_VICTIM_AGE, '');
export const isVictimBreathing = identityReducer(SET_IS_VICTIM_BREATHING, false);
export const victimBreathingDescription = identityReducer(SET_VICTIM_BREATHING_DESCRIPTION, '');
export const isVictimChestRising = identityReducer(SET_IS_VICTIM_CHEST_RISING, false);

// PatientInformationForm variables
export const patientName = identityReducer(SET_PATIENT_NAME, '');
export const patientOutcome = identityReducer(SET_PATIENT_OUTCOME, '');
export const patientInterestedInInterview = identityReducer(SET_PATIENT_INTERESTED_IN_INTERVIEW, true);
export const patientPreferredContactMethod = identityReducer(SET_PATIENT_PREFERRED_CONTACT_METHOD, PHONE);
export const patientInformationNotes = identityReducer(SET_PATIENT_INFORMATION_NOTES, '');
export const admittingHospital = identityReducer(SET_ADMITTING_HOSPITAL, '');
