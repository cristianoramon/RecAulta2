import { AppContext } from '../../components/contexts/AppContext';
import logo from './../../logo.svg';
import './App.css';
import React,{ Component, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {Div} from '../../components/Div';



const globalState = {
  title:'O titulo',
  counter:0,
  body: 'body'
}

const reducer = (state,action) => {

  switch( action.type ) {
    case 'muda': {

      console.log('Chamou o muda',action.payload);
      return { ...state,title:action.payload};
    }

    case 'invert':{
           const{ title} = state;
           return {...state,title:title.split('').reverse().join('')};
    }
     
  }
  return {...state};
}

function App() {
 
  const[state,dispatch] = useReducer(reducer,globalState);
  const {counter,title,body} = state;
  return (
   <div>
      <h1>{title} {counter}</h1>
      <button onClick={ () => dispatch( {type:'muda' ,payload:new Date().toLocaleDateString('pt-BR')})} > C lick</button>
      <button onClick={ () => dispatch( {type:'invert'})} > invert</button>
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
