import {createAction, props} from "@ngrx/store";

export const add = createAction('[Calculator] Add', props<{ num: number }>());
export const subtract = createAction('[Calculator] Subtract', props<{ num: number }>());
export const multiply = createAction('[Calculator] Multiply', props<{ num: number }>());
export const divide = createAction('[Calculator] Divide', props<{ num: number }>());
export const reset = createAction('[Calculator] Reset');
