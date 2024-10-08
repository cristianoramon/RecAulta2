import { useEffect, useLayoutEffect, useRef, useState } from 'react';



const s = {

  style:{
    fontSize:'60px',
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    //logErrorToMyService(error, errorInfo);
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children; 
  }
}


const ItWillThrowError = () => {
  const [counter,setCounter] = useState(0);


  useEffect( ()=>{

    if ( counter > 3 ){
      throw new Error('Chato');
    }
  },[counter]);

  return <div>
    <button {...s} onClick={ () => setCounter( (s) => s+1)}>Click to increase {counter}</button>
  </div>
}

function App(){

  return (
    <div>
      <ErrorBoundary>

         <ItWillThrowError/>      

      </ErrorBoundary>
    </div>
  );
};

export default App;
