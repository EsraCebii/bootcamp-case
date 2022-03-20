import { ThunkDispatch } from "redux-thunk";
import { List } from "./lists";

export interface BoardState {
    data: Board[];
    loading: boolean;
    error: string;
    currentBoard: Board;
}
export interface Board {
    id: number;
    title: string;
    createdAt: any;
    updatedAt: any;
    ownerId: number;
    lists: List[];
    owner: Owner;
    members: Member[];
}
export interface Member {
    username: string;
    boardId: number;


}
export interface Owner {
    id: number;
    username: string;
    createdAt: any;
    updatedAt: any;
}
export interface BoardForm {
    title: string;
}
interface GET_START {
    type: "GET_BOARDS_START";
}
interface GET_SUCCESS {
    type: "GET_BOARDS_SUCCESS";
    payload: Board[]

}
interface GET_ERROR {
    type: "GET_BOARDS_ERROR";
}
interface GET_BOARD_START {
  type: "GET_BOARD_START"
}
interface GET_BOARD_SUCCES {
 type: "GET_BOARD_SUCCES";
 payload: Board; 
}
interface GET_BOARD_ERROR {
 type: "GET_BOARD_ERROR";

}
interface ADD_START {
    type: "ADD_BOARD_START";
  }
  
  interface ADD_SUCCESS {
    type: "ADD_BOARD_SUCCESS";
    payload: Board;
  }
  interface ADD_ERROR {
    type: "ADD_BOARD_ERROR";
  }
  interface UPDATE_ERROR {
    type: "UPDATE_BOARD_ERROR";
  }
  interface UPDATE_START {
    type: "UPDATE_BOARD_START";
  }
  
  interface UPDATE_SUCCESS {
    type: "UPDATE_BOARD_SUCCESS";
    payload: Board;
  }
  interface DELETE_ERROR {
    type: "DELETE_BOARD_ERROR";
  }
  interface DELETE_START {
    type: "DELETE_BOARD_START";
  }
  
  interface DELETE_SUCCESS {
    type: "DELETE_BOARD_SUCCESS";
    payload: number;
  }
export type BoardAction = 
| GET_START
| GET_SUCCESS
| GET_ERROR
| GET_BOARD_START
| GET_BOARD_SUCCES
| GET_BOARD_ERROR
| ADD_START 
| ADD_SUCCESS 
| ADD_ERROR
| UPDATE_START 
| UPDATE_SUCCESS 
| UPDATE_ERROR 
| DELETE_START 
| DELETE_SUCCESS 
| DELETE_ERROR 

export type BoardDispatch = ThunkDispatch<BoardState, void, BoardAction>;
