import { useReducer } from "react"
import { PostsContexts } from "./contexts";
import { data } from './data';
import { reducer } from './reducer';


export const PostProvider = ({children}) => {

    const [postsState,postsDispath] = useReducer(reducer,data);

    return <PostsContexts.Provider value={{postsState,postsDispath}}>{children}</PostsContexts.Provider>


}