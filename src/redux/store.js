import { combineReducers, createStore } from 'redux';

import {
  workerName,
  inputDate,
  startTime,
  endTime,
  callerPhoneNumber,
  callerLocation,
  emsDispatched,
  emergencyType,
  emergencyAddress,
  victimAge,
  isVictimBreathing,
  victimBreathingDescription,
  isVictimChestRising,
} from './reducers.js';

const rootReducer = combineReducers({
  workerName,
  inputDate,
  startTime,
  endTime,
  callerPhoneNumber,
  callerLocation,
  emsDispatched,
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
