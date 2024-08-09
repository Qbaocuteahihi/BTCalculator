import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.action'
export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};
export const counterReducer = createReducer( initialState,
  on(CalculatorActions.add, (state, { num }) => ({ count: state.count + num })),

  on(CalculatorActions.subtract, (state, { num }) => ({
    count: state.count - num,
  })),
  on(CalculatorActions.multiply, (state, { num }) => ({
    count: state.count * num,
  })),
  on(CalculatorActions.divide, (state, { num }) => ({
    count: num === 0 ? state.count : state.count / num,
  })),
  on(CalculatorActions.reset, () => initialState),
);
