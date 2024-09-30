
import React, { Suspense, useState } from 'react';
// import  LazyComponents  from './lazy-components';

const LoadComponent = ()=> import ('./lazy-components');
const LazyComponents = React.lazy( LoadComponent);

function App(){


  const [show,setShow] = useState(false);
  return (
      <div>
        <p>Oi</p>
        <Suspense fallback={<p>Carregando</p>}></Suspense>
        <button onClick={()=>setShow((s)=>!s)}>dds</button>
        { show && <LazyComponents />} 
      </div>  
  );
};

export default App;
