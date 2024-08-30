import logo from './../../logo.svg';
import './App.css';
import React,{ Component, createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {Div} from '../../components/Div';


const useMyHook = (cb,delay=1000) => {

  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
    console.log("status function");
  },[cb]);


  useEffect( () => {

    console.log("status delay");
    const interval  = setInterval( () => {
      savedCb.current();
     },delay);
     
     return ()=> clearInterval(interval);
  },[delay]);

  
};

function App() {
  const [counter,setCoounter] = useState(0);
  const [delay,setDelay] = useState(1000);
  const [incrementor,setIncrementor] = useState(100);

  useMyHook( () => setCoounter( (c)  => c + 1 ),delay);
  
  return (
    
      <div>
         <h1>counter: {counter}</h1>
         <h1>Delay: {delay}</h1>
         <button onClick={ () => {
          
          setDelay(  (d) => d+incrementor);
         } }> + {incrementor}</button>
         <button onClick={ () => {
          
          setDelay(  (d) => d-incrementor);
         } }> - {incrementor}</button>
         <input type="text" value={incrementor} onChange={ (e) => setIncrementor( Number(e.target.value)) }></input>

      </div>
   
   
  );

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
