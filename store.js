import * as redux from 'redux';

//Actions
const export COUNTER_INCREMENT='counter/increment';
const export COUNTER_DECREMENT='counter/decrement';

const reducer = (state,action) =>
{
  switch(action.type)
  {
    case COUNTER_INCREMENT:{
      return {...state}
    }

  }
}