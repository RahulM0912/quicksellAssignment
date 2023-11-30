import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Reducers/DataReducer';

const temp = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default temp;