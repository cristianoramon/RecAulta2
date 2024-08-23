import logo from './../../logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';


const evenFn = () =>{

  console.log('h1 duplicado');
}
function App() {

   const[counter,setCounter] = useState(0);  

   //componentDidUpdate
   useEffect(
    ()=>{
      console.log("componentDidUpdate");
    }
   );

  //componentDidMount executa 1 vez
  useEffect(
    ()=>{
      console.log("componentDidMount");
      document.querySelector('h1')?.addEventListener('click',evenFn);

      //componetDidWillUmount - Limpeza
      return ()=>{
        document.querySelector('h1')?.removeEventListener('click',evenFn);
      }
    },[]
    );

  //componentDidMount quando a dependencia  mudar status
  //Quando o componente e desmontado
  useEffect(
    ()=>{
      console.log("componentDidMount = depedencia = counter");
    },[counter]
    );
  return (
    <div className="App">
   
      <h1> Contador {counter}</h1>
      <button
          onClick={ () => setCounter( counter+1)}>
            +
      </button>
         
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
