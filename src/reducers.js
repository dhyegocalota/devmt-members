import { combineReducers } from 'redux';

const initialMembersState = {
  loading: false,
  error: false,
  members: [],
};

const membersReducer = (state = initialMembersState, { type, payload }) => {
  switch (type) {
    case 'FETCH_MEMBERS':
      return { ...state, loading: true, error: false };

    case 'FETCH_MEMBERS_SUCCESS':
      return { ...state, loading: false, members: payload };

    case 'FETCH_MEMBERS_ERROR':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default combineReducers({
  members: membersReducer,
});
