
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContextOld2';
import { Button } from '../../components/Button2';
import { Heading } from '../../components/Heading';


function App(){

  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <Heading />

      <div>
        <Button onButtonClick={actions.increase}>increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={actions.reset}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          async increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
      </div>
    </div>
  );
};

export default App;
