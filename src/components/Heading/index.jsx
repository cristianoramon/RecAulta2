import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContextOld2';

export const Heading = () => {
  const [state, actions] = useCounterContext();

  return <h1 style={{ fontSize: '60px' }}>{state.counter}</h1>;
};
