import {combineReducers} from 'redux';

import breedReducer from './reducer';

const rootReducer = combineReducers({
    allBreed: breedReducer,
    
    });
    
    export default rootReducer;