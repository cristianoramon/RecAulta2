import * as types from './types';

export const reducer = (state,action) => {


    console.log('Action type ',action.type);
    switch ( action.type ) {

        case types.INCREMENTER_COUNTER: {
            console.log('stateIncremento',state.counter);
            return {...state,counter:state.counter + 1 }
        }

        case types.DECREMENTER_COUNTER: {
            console.log('stateDecremento',state.counter);
            return {...state,counter:state.counter - 1 }
        }

    }

    return {...state};
}