import { CommentAction, CommentState } from "../../types/comments";

const defaultState: CommentState = {
  data: [],
  loading: false,
  error: "",
};
const commentReducer = (
  state: CommentState = defaultState,
  action: CommentAction
) => {
  switch (action.type) {
    case "ADD_COMMENT_START":
      return { ...state, loading: true, error: "" };
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_COMMENT_ERROR":
      return { ...state, loading: false, error: "Error adding comments.. " };
      case "DELETE_COMMENT_START":
        return { ...state, loading: true, error: "" };
      case "DELETE_COMMENT_SUCCESS":
        return {
          ...state,
          loading: false,
          data: state.data.filter((comment) => comment.id !== action.payload),
        };
      case "DELETE_COMMENT_ERROR":
        return {
          ...state,
          loading: false,
          error: "Error deleting comment.. ",
        };
    default:
      return state;
  }
};

export default commentReducer;
