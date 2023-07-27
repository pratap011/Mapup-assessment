import {configureStore } from '@reduxjs/toolkit'
import locationReducer from './location';


//Inital configuration of reduc toolkit store with the reducer.

export default configureStore({
    reducer:{
        changeLocation:locationReducer
    }
});