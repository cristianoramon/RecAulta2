import * as types from './types';

export const reducer = (state,action)=> {

    console.log('REDUCE');
    console.log(action.payload);  
    switch ( action.type ) {

        case types.POSTS_SUCCESS:  {
            console.log('SUCESSO');
            return {...state,posts:action.payload, loading: false};
            
        }           
        
        case types.POSTS_LOADING:  {
            console.log('LOading');
            return {...state, loading: true};            
        } 
    } 

    return {...state};
}