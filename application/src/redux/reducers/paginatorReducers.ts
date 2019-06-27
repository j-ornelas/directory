import { ActionTypes, Action } from '../types';

export const paginatorStartIndex = (state:number = 0, action:Action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_PAGINATOR:
      return state + action.payload;
    case ActionTypes.DECREASE_PAGINATOR:
      const newIndex = state - action.payload;
      return newIndex < 0 ? 0 : newIndex;
    default:
      return state;
  }
}
