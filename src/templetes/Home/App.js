import logo from './../../logo.svg';
import './App.css';
import React,{ Component, createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {Div} from '../../components/Div';
import { PostProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';


function App() {
  
  return (
    
      <PostProvider>    
        <div>
          <Posts/> 
        </div>

      </PostProvider>
   
   
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
