//compund components

import { Children, cloneElement, createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';



const s = {

  style:{
    fontSize:'60px',
  }
};


// const Parent =  ({children})=> {
//   return children;
// }



// const Parent = ({children} ) => {

//   return Children.map(children,(child) =>{
//     const newChild =  cloneElement(child,{...s});
//     return newChild;
//   })

// }

const TurnOnOffContext  = createContext();

const TornOnOf = ({children}) => {

  const [isOn,setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{isOn,onTurn}}>{children}</TurnOnOffContext.Provider>
  )
}

const TornOn = ({children}) => {

  const {isOn} = useContext(TurnOnOffContext);
  return (

    isOn ? children : null
  )
}


const TornOf = ({children}) => {
  const {isOn} = useContext(TurnOnOffContext);

  return (

    isOn ? null : children
  )
}

const TornButton = ({...props}) => {

  const {isOn,onTurn} = useContext(TurnOnOffContext);
  

  return (

    <button  {...props} onClick={onTurn}>Turn {isOn?'OFF':'ON'}  </button>
  )
}

const P = ({children}) => {

  return <p {...s}>{children}</p>
}

function App(){

  return (

  <TornOnOf>
    <TornOn><P>liga</P></TornOn>
    <TornOf>OF</TornOf>

    <TornButton {...s}/>
  </TornOnOf>  
  );
};

export default App;
