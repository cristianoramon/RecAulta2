import { useContext } from "react";
import { GlobalContext } from '../contexts/AppContext'
export const P = () => {
    const theContext = useContext(GlobalContext);
    const { contextState:{body} ,contextState, setState} = theContext;
    console.log(theContext);
    return(
      <p onClick={ () => setState( (s) => ( {...s,counter:s.counter+1})) }>{body}</p>
      //<p onClick={()=> setContextState({...contextState,counter:counter+1}) }>{body}</p>
    )
  };
  