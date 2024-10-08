import logo from './../../logo.svg';
import './App.css';
import { Component, useState } from 'react';

function App() {

   const[reverse,setReverse] = useState(false);
   const[counter,setCounter] = useState(0);

   const reverseClass = reverse ? 'reverse':'';

   const hanclickButton = () => {

    reverse ? setReverse(false): setReverse(true);
    
  };

  const handleCounter = () => {
     
     setCounter( (counter) => counter+1 );  
  };

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
      
      <h1> {counter}</h1>
      <button
        onClick={hanclickButton}  
      > reverse {reverseClass}
      </button>
      <button
        onClick={handleCounter}  
      > counter  {counter}
      </button>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
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
