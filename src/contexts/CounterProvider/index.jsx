import { useReducer } from "react"
import { CounterContext } from "./context"
import { reducer } from "./reducer"
import { data } from "./data"

export const CounterProvider = ( {children} ) => {

    const [ countState,counterDispacth]  = useReducer(reducer,data);
    return <CounterContext.Provider value={{countState,counterDispacth}}>{children}</CounterContext.Provider>;

}