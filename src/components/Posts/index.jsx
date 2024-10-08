import { useContext, useEffect, useRef } from "react";
import { PostsContexts } from "../../contexts/PostsProvider/contexts";
import { loadPosts  } from "../../contexts/PostsProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";


export const Posts = () => {

    const postsContext =  useContext(PostsContexts); 
    const {postsState,postsDispath} = postsContext;
    const isMounted  = useRef(true); 
    console.log(' mount ' , isMounted.current);

    //const counterContext = useContext(CounterContext);
    //const {counterState,counterDispacth} = counterContext;

    useEffect(
      () => {
        console.log('carregando');
        loadPosts(postsDispath).then( (dispatch) => {
            console.log('loadPosts' , isMounted.current);
            dispatch();
            if ( isMounted.current ) {
                console.log(' Mount true2 ok');
                dispatch();
            }
        });

        //return () => { isMounted.current = false;    console.log('Umount',isMounted.current);}
       
      },[postsDispath]
    );

   // console.log(postsState);

    return (
        <div>        
            <h1>Post</h1>

            {postsState.loading && (
                <p><strong>Carregando</strong></p>
            )}
            {postsState.posts.map( (p) => {
                return ( <p key={p.id}> {p.title}</p>);
            })}
        </div>
    );
};