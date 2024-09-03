
import * as types from './types';

export const incrementCounter = ( dispatch )  => {
    dispatch({type: types.INCREMENTER_COUNTER});
}


export const decrementCounter = ( dispatch )  => {
    console.log('decrement ', types.DECREMENTER_COUNTER);
    dispatch({type: types.DECREMENTER_COUNTER});
}