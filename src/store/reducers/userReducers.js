import { GET_USERS, GET_USERS_LOADING, USERS_ERROR } from '../types';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case USERS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case 'FILTER_USER':
      return {
        ...state,
        data: state.data.filter((list)=> list.login ===action.username),
      };
    default:
      return state;
  }
}
