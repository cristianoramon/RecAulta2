import logo from './../../logo.svg';
import './App.css';
import React,{ Component, createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {Div} from '../../components/Div';

//actions
export const actions = {
  CHANGE_TITLE :'CHANGE_TITLE',
}

//data.js
export const globalState = {
  title:'O titulo',
  counter:0,
  body: 'body'
}

//reducer.js
export const reducer = (state,action) => {
  console.log('reduce action',action);

  switch(action.type) {

    case actions.CHANGE_TITLE: {
      console.log('Mudou o titulo');
      return{...state,title:action.payload};
    }
  }
  return ({...state} );
}


//AppContext.jsx
export const Context = createContext();
export const AppContextReducer = ( {children} ) => {

  const [state,dispatch] = useReducer(reducer,globalState);

  const changeTitle = (payload) => {
    dispatch({type:actions.CHANGE_TITLE,payload:payload})
  }

  return <Context.Provider value={{state,changeTitle}}>{children}</Context.Provider>

} 


//H1 index.jsx
export const  H1 = () => {
  const contexts = useContext(Context);  
  const {state} = contexts;
  const inputRef = useRef();

  console.log(state.title);  
  return (   <>
               <h1 onClick={ () =>  {

                  contexts.changeTitle(inputRef.current.value);

                }}> {state.title} 
                
              </h1>
               <input type="text"  ref={inputRef} />
             </> );
}



function App() {
  return (
    <AppContextReducer>
      <div>
         <H1></H1>
      </div>
    </AppContextReducer>
   
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
