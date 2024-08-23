import P from 'prop-types';
import logo from './../../logo.svg';
import './App.css';
import React,{ Component, useCallback, useEffect, useMemo, useState } from 'react';



// const Button = React.memo( function Button({incrimentoButton}) {
//   console.log('Filho');
//   return (
//     <button
//       onClick={ () => incrimentoButton(10) } >
//       +
//     </button>

//   );
// });

const Button = ({incrimentoButton})  => {
  console.log('Filho');
  return (
    <button
      onClick={ () => incrimentoButton(10) } >
      +
    </button>

  );
};

Button.prototype = {
  incrimentoButton: P.func
};

function App() {

  const[counter,setCounter] = useState(0);  


  const incrementoCount = useCallback ( (num) => {
    setCounter(  (c) => c+num);
  },[]);

  const btn = useMemo( () => {
  return (
    <Button 
      incrimentoButton={incrementoCount}
    />     
    );
  },[incrementoCount]); 

  console.log('Pai');
  return (
   
    <div className="App">   
      <h1> Contador {counter}</h1>
      {/* <Button 
         incrimentoButton={incrementoCount}
      />   */}

      {btn}
         
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
