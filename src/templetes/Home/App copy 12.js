import { useEffect, useRef, useState } from 'react';
import './App.css';
import { wait } from '@testing-library/user-event/dist/utils';

/*         
        <PostProvider>    
          <div>
             <Posts/>                             
          </div>
        </PostProvider> */
const isObejtoEqual = (objA, objB)  => {
  return JSON.stringify(objA) === JSON.stringify(objB);
}       

const useFetch = (url,options) => {

  const [result,setResult]   = useState([]);
  const [loading,setLoading] = useState(false);
  const [shouldLoad,setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionRef = useRef(options);

  useEffect( () => {

    let change = false;
 
    console.log(' Ref' , urlRef.current, 'Url ', url);

    if ( !isObejtoEqual(url, urlRef.current)  ){

      urlRef.current = url;
      console.log(' Ref2 ' , urlRef.current, 'Url2 ', url);
      console.log('urlRef');
      change = true;
      
    }

    if ( !isObejtoEqual(options, optionRef.current)  ){

      optionRef.current = url;
      console.log(' Option2 ' , optionRef.current, 'Option2 ', url);
      console.log('Option2Ref');
      change = true;     
    }

    if (change) {
      setShouldLoad((s)=> !s);
    }

  },[url,options]);



  useEffect(
    ()=>{

      console.log(' Effect ' , new Date().toString());
      console.log(' Option ' , optionRef.current.headers);
      setLoading(true);

      const fetchData = async () => {
      
      try{

        await new Promise( (r) => setTimeout(r,3000));
        const response   = await fetch(urlRef.current,optionRef.current);
        const jsonResult = await response.json();
        console.log('Excutando o fetch');
        
      
        setResult(jsonResult);
        setLoading(false);
      

      } catch ( e ) {

        

        setLoading(false);
        
        throw e;
      }
      
      
      } 

     fetchData();
    

    },[shouldLoad]
  );
  return [result,loading];

}

function App() {
  
  console.log('Iniciando o App');
  const [postId,setPostId] = useState('');
  const [result,loading] = useFetch('https://jsonplaceholder.typicode.com/posts/'+postId,{
    method: 'GET',
    headers:{
      abc:970
    }
  });


  useEffect( ()=> {
    console.log('ID ', postId);
  },[postId]);


  if (loading) {
    return <p> Loading</p>
  }

  if ( !loading && result ) {
    // console.log(result);
  }

  const handleClick = (id) => {

    setPostId(id);
    

  }

  return (

    <div>
      {result?.length> 0 ? result.map((p) => (
      <div key={`post-${p.id}`}>
          <p onClick={()=> handleClick(p.id)}> {p.title}</p>
      </div>  
      )):( 
        <div>
        <p onClick={()=> handleClick('')}> {result.title}</p>
    </div>  
      )}      
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
