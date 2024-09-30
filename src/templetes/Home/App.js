import { Children, cloneElement, useEffect, useLayoutEffect, useRef, useState } from 'react';



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

const TornOnOf = ({children}) => {

  const [isOn,setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, child=>{
    const newChild = cloneElement(child,{
      isOn,
      onTurn
    });

    return newChild;
  });
}

const TornOn = ({isOn,children}) => {

  return (

    isOn ? children : null
  )
}


const TornOf = ({isOn,children}) => {

  return (

    isOn ? null : children
  )
}

const TornButton = ({isOn,onTurn,...props}) => {

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
