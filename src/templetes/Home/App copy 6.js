import logo from './../../logo.svg';
import './App.css';
import React,{ Component, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';


const globalState = {
  title:'O titulo',
  counter:0,
  body: 'body'
}

const GlobalContext = React.createContext();

const Div = ( { children } ) => {
  return (
    <>
      <H1 />
      <P />
    </>     
  )
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return(
    <h1>{contextState.title}  {contextState.counter} </h1>
  )
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState:{body} ,contextState, setContextState} = theContext;
  console.log(theContext);
  return(
    <p onClick={()=> setContextState( (s) => ( {...s,counter:s.counter+1})) }>{body}</p>
    //<p onClick={()=> setContextState({...contextState,counter:counter+1}) }>{body}</p>
  )
};

function App() {
 
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{contextState,setContextState}}>
      <Div />
    </GlobalContext.Provider>

  )

}


// class App extends Component {

//   state={
//     reverse:true,
//   };


//   hanclickButton = () => {
     
//     const{reverse} = this.state;

//     reverse ? this.setState({reverse:false}): this.setState({reverse:true});
    
//   };

//   render () {
//     const {reverse} = this.state;
//     const reverseClass = reverse ? 'reverse':'';
//     return (
//           <div className="App">
//           <header className="App-header">
//             <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//             <button
//               onClick={this.hanclickButton}  
//             > reverse {reverseClass}
//             </button>
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//     );
    
//   }
// }

export default App;
