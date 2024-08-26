import P from 'prop-types';
import logo from './../../logo.svg';
import './App.css';
import React,{ Component, useCallback, useEffect, useMemo, useRef, useState } from 'react';

  const Posts = ({post,handleClick}) =>{
    console.log('Filho');
    return (
      <div key={post.id} className='post'>
        <h1 onClick={ ()=> handleClick( post.title)}>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }



function App() {

  const [posts,setPosts] = useState([]);
  const [value,setValue] = useState('');
  const input  = useRef(null);
  console.log('Pai');

  //Did Mount
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r))  
    } ,[]
  );


 useEffect(
  ()=>{
    input.current.focus();
    console.log(input.current);
  },[value]
 );
  
  const handleClick = ( value ) => {
    setValue(value);
  };    

  return (
    <div className='App'>
      <input ref={input} type='text' value={value} onChange={ (e) => setValue(e.target.value)} />
      {useMemo(
        () => {
          return (
            posts.length > 0 &&
              posts.map((post) => {
                return (
                  <Posts key={post.key} post={post} handleClick={handleClick} />
                )
              })
          )
        },[posts]  ) 
      
      }
 
    </div>
  )

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
