import { type } from "@testing-library/user-event/dist/type";

import * as types from './types';

export const loadPosts = async( dispatch ) => {


    dispatch({type:types.POSTS_LOADIND});


    const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts   = await postRaw.json();

    dispatch( { type:types.POSTS_SUCCESS, payload: posts} );

    //console.log('posts' ,posts);
    //return () => dispatch( { type:types.POSTS_SUCCESS, payload: posts} );

    // setTimeout( async () => {
    //     const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const posts   = await postRaw.json();
    //     console.log('posts' ,posts);
    //     dispatch( { type:types.POSTS_SUCCESS, payload: posts} );
        
    // }, 5000);

    
   
}