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
});

const store = createStore(
  rootReducer,
);

export default store;
