import { ActionTypes } from '../types';

// move paginator forward
export interface IncreasePaginatorInterface {
  type:ActionTypes.INCREASE_PAGINATOR;
  payload:number;
}
export const increasePaginator = (numPerPage:number) => ({
  type: ActionTypes.INCREASE_PAGINATOR,
  payload: numPerPage,
})
// move paginator backwards
export interface DecreasePaginatorInterface {
  type:ActionTypes.DECREASE_PAGINATOR;
  payload:number;
}
export const decreasePaginator = (numPerPage:number) => ({
  type: ActionTypes.DECREASE_PAGINATOR,
  payload: numPerPage,
})
