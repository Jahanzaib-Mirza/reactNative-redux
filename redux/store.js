import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import  Saga  from 'redux-saga';
import sagaData from './saga';

const sagaMid = Saga();
export const store = configureStore({
  reducer: rootReducer,
  middleware:()=>[sagaMid],
});
sagaMid.run(sagaData)
