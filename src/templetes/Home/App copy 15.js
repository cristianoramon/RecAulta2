
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';




// export const DisplayCounted = forwardRef(
//   function DisplayCounted({counted},ref) {
//     return (
//       <div ref={ref} style={ {height: '100px',width: '100px',overflow:'scroll'}}>
//       {counted.map( (c)=>{
//         return <p key={`c-${c}`}>{c}</p>
//       })}
      
//    </div>
//     );
// });


export const DisplayCounted = forwardRef(

  function DisplayCounted({counted},ref) {

    const [rand,setRand] = useState('0.23');
    const divRef = useRef();

    const handleClick = ()=> {
      setRand( (r) => {setRand(Math.random().toFixed(2))});

    };

    useImperativeHandle(ref,()=>({
      handleClick,
      divRef:divRef.current,
    }));

    return (
      <div ref={divRef} style={ {height: '100px',width: '100px',overflow:'scroll'}}>
      {counted.map( (c)=>{
        return <p onClick={handleClick} key={`c-${c}`}>{c} ++ {rand}</p>
      })}
      
   </div>
    );
});


function App() {

  
  const [counted,setCounted] = useState([0,1,2,3]);
  const divRef = useRef();

  // useEffect(()=> {

      //  while( now < now+3600 );
  //   divRef.current.scrollTop = divRef.current.scrollHeight;
  // });


  useLayoutEffect(()=> {

    const now = Date.now();
    while( Date.now() < now+3600 );
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });


  const handleClick = () => {
    setCounted( c => [...c,+c.slice(-1)+1]);
    divRef.current.handleClick();
  }
  return (

   <>
    <button onClick={ handleClick}> Button {counted.slice(-1)}</button>
    <DisplayCounted counted={counted} ref={divRef}></DisplayCounted>
   </>
    
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
