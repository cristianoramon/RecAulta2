
import { useCallback, useState } from 'react';
import './App.css';
import { useEffect } from 'react';


const useAsync = ( asyncFunction,shouldLoad) =>{

  // const [result,setResult] = useState(null);
  // const [error,setError]   = useState(null);
  // const [status,setStatus]  = useState('idle');

  
  const[state,setState] = useState({

    result:null,
    error:null,
    status:'idle'
    
  });

  const run = useCallback( () =>{

      // setResult(null);
      // setError(null);
      // setStatus('pending');

      setState( {result:null,
                  error:null,
                  status:'pedding'
      });


      return asyncFunction()
             .then( (response) => {
              //  setStatus('settled');
              //  setResult(response);

              setState( {result:response,
                         error:null,
                         status:'settled'
              });
             })
             .catch( (error) => {
              //  setError(error);
              //  setStatus('error');
              
              setState( { result:null,
                          error:error,
                          status:'error'
              });
             })
    },[asyncFunction]
 );

 useEffect( () => {
  if (shouldLoad){
    run();
  }
 },[run,shouldLoad]);

 return [run,state.result,state.error,state.status];
};



const fecthData = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();

  return json;
};


function App() {

  const [posts,setPosts] = useState(null);
  const [reFetchData,result,error,status]  = useAsync(fecthData,true);

  // useEffect( () => {
  //   reFetchData();
  // },[]);

 
  return (

    <div>
        <pre> {JSON.stringify(result,null,2)} </pre>
       
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
