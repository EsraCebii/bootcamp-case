import { ThunkDispatch } from "redux-thunk";

export interface CardState {
  data: Card[];
  loading: boolean;
  error: string;

}
export interface CardLabel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  cardId: number;
  labelId: number;
}
export interface Label {
  id: number;
  title: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  CardLabel: CardLabel;
}
export interface Card {
  id: number;
  title: string;
  description?: any;
  order?: any;
  duedate?: any;
  createdAt: Date;
  updatedAt: Date;
  listId: number;
  labels: any[];
  checklists: any[];
  comments: any[];
}
export interface CardForm {
    title: string;
    listId: number;
}
  interface ADD_START {
    type: "ADD_CARD_START";
  }
  
  interface ADD_SUCCESS {
    type: "ADD_CARD_SUCCESS";
    payload: Card;
  }
  interface ADD_ERROR {
    type: "ADD_CARD_ERROR";
  }
  interface GET_CARDS_START {
    type: "GET_CARDS_START";
  }
  interface GET_CARDS_SUCCESS {
    type: "GET_CARDS_SUCCESS";
    payload: Card;
  }
  interface GET_CARDS_ERROR {
    type: "GET_CARDS_ERROR";
  }
  export type CardAction =
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  | GET_CARDS_START
  | GET_CARDS_SUCCESS
  | GET_CARDS_ERROR
  export type CardDispatch = ThunkDispatch<CardState, void, CardAction>;