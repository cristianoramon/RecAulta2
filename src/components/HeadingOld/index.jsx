import { useCounterContext } from "../../contexts/CounterContextOld";

export const Heading = ( ) => {

    const [state,action] = useCounterContext();
    console.log('Heading ' ,state );
    return (
         <h1 style={{fontSize:'60px'}} >{state.counter}</h1>
    );
}