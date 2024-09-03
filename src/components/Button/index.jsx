import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterProvider/context";
import { decrementCounter, incrementCounter } from "../../contexts/CounterProvider/action";

export const Button = () => {

    const counterContext = useContext( CounterContext );
    const {countState,counterDispacth}  = counterContext;
    console.log(countState);

    return (  <> 
                 <button onClick={  ()=> { incrementCounter(counterDispacth); } }> Count  {countState.counter} + </button>  
                 <button onClick={  ()=> { decrementCounter(counterDispacth); } }> Count  {countState.counter} - </button>
              </>

        );
   

}