import * as types from './types';

export const reducer = (state,action)=> {

    console.log('REDUCE');
    switch ( action.type ) {

        case types.POSTS_SUCCESS:  {
            console.log('SUCESSO');
            return {...state,posts:action.payload, loading: false};
            
        }           
        
        case types.POSTS_LOADIND:  {
            console.log('SUCESSO');
            return {...state, loading: true};            
        } 
    } 

    return {...state};
}