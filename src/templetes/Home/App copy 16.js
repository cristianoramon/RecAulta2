
import { forwardRef, useCallback, useDebugValue, useImperativeHandle, useRef, useState } from 'react';
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




const useMediaQuery = (queryValue,initialValue = false ) =>{

  const[match,setMatch] = useState(initialValue);


  useDebugValue(` Query : ${queryValue}`, (n) => {
    return n + 'modificado';
  });
  useEffect(()=>{
    console.log('useEffect ', Date().toString() );

    let isMounted = true;

    const matchMedia = window.matchMedia( queryValue);

    const handleChange = () => {
    
      if (!isMounted ) return;
      setMatch(Boolean(matchMedia.matches));
      console.log('Match', Boolean(matchMedia.matches));
    }

    matchMedia.addEventListener('change',handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change',handleChange);
    }

  },[queryValue]);

  return match;
}

function App() {

  const huge = useMediaQuery('(min-width: 980px)');  
  const big = useMediaQuery('(max-width: 978px) and (min-width:768px)');  
  const medium = useMediaQuery('(max-width: 767px) and (min-width:321px)');
  const small = useMediaQuery('(max-width: 321px) ');

  const background = huge?'green':big?'red':medium?'purple':small?'yellow':null;
  
  return (

      <>
      <div style={{fontSize:'60px',background}}>sdd</div>
      
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
