import { handleActions } from 'redux-actions';

import {
  SET_WORKER_NAME,
  SET_INPUT_DATE,
  SET_START_TIME,
  SET_END_TIME,
  SET_CALLER_PHONE_NUMBER,
  SET_CALLER_LOCATION,
  SET_EMS_DISPATCHED,
  SET_EMERGENCY_TYPE,
  SET_EMERGENCY_ADDRESS,
  SET_VICTIM_AGE,
  SET_IS_VICTIM_BREATHING,
  SET_VICTIM_BREATHING_DESCRIPTION,
  SET_IS_VICTIM_CHEST_RISING,
} from './actions';


const identityReducer = (actionName, initialState) => handleActions({
  [actionName]: (state, action) => action.payload
}, initialState);

const defaultPhoneNumber = {
  areaCode: '',
  telephonePrefix: '',
  lineNumber: '',
};

export const workerName = identityReducer(SET_WORKER_NAME, '');
export const inputDate = identityReducer(SET_INPUT_DATE, '');
export const startTime = identityReducer(SET_START_TIME, '');
export const endTime = identityReducer(SET_END_TIME, '');
export const callerPhoneNumber = identityReducer(SET_CALLER_PHONE_NUMBER, defaultPhoneNumber);
export const callerLocation = identityReducer(SET_CALLER_LOCATION, '');
export const emsDispatched = identityReducer(SET_EMS_DISPATCHED, '');

export const emergencyType = identityReducer(SET_EMERGENCY_TYPE, '');
export const emergencyAddress = identityReducer(SET_EMERGENCY_ADDRESS, '');
export const victimAge = identityReducer(SET_VICTIM_AGE, '');
export const isVictimBreathing = identityReducer(SET_IS_VICTIM_BREATHING, '');
export const victimBreathingDescription = identityReducer(SET_VICTIM_BREATHING_DESCRIPTION, '');
export const isVictimChestRising = identityReducer(SET_IS_VICTIM_CHEST_RISING, '');
