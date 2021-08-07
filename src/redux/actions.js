import { createAction } from 'redux-actions';

export const SET_ACCOUNT_TYPE = 'SET_ACCOUNT_TYPE';
export const SET_CALLER_PHONE_NUMBER = 'SET_CALLER_PHONE_NUMBER';
export const SET_CALLER_LOCATION = 'SET_CALLER_LOCATION';
export const SET_EMS_DISPATCHED = 'SET_EMS_DISPATCHED';
export const SET_CALL_INFORMATION_NOTES = 'SET_CALL_INFORMATION_NOTES';
export const SET_EMERGENCY_TYPE = 'SET_EMERGENCY_TYPE';
export const SET_EMERGENCY_ADDRESS = 'SET_EMERGENCY_ADDRESS';
export const SET_VICTIM_AGE = 'SET_VICTIM_AGE';
export const SET_IS_VICTIM_BREATHING = 'SET_IS_VICTIM_BREATHING';
export const SET_VICTIM_BREATHING_DESCRIPTION = 'SET_VICTIM_BREATHING_DESCRIPTION';
export const SET_IS_VICTIM_CHEST_RISING = 'SET_IS_VICTIM_CHEST_RISING';

export const setAccountType = createAction(SET_ACCOUNT_TYPE);
export const setCallerPhoneNumber = createAction(SET_CALLER_PHONE_NUMBER);
export const setCallerLocation = createAction(SET_CALLER_LOCATION);
export const setEmsDispatched = createAction(SET_EMS_DISPATCHED);
export const setCallInformationNotes = createAction(SET_CALL_INFORMATION_NOTES);
export const setEmergencyType = createAction(SET_EMERGENCY_TYPE);
export const setEmergencyAddress = createAction(SET_EMERGENCY_ADDRESS);
export const setVictimAge = createAction(SET_VICTIM_AGE);
export const setIsVictimBreathing = createAction(SET_IS_VICTIM_BREATHING);
export const setVictimBreathingDescription = createAction(SET_VICTIM_BREATHING_DESCRIPTION);
export const setIsVictimChestRising = createAction(SET_IS_VICTIM_CHEST_RISING);
