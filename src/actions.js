import axios from 'axios';
import shuffle from 'array-shuffle';
import Config from './Config';

export const fetchMembers = ({ limit }) => dispatch => {
  dispatch({ type: 'FETCH_MEMBERS' });
  axios
    .get(`${Config.get('SLACK_API_BASE_URL')}/users`)
    .then(({ data: { members } }) => members)
    .then(members => shuffle(members).splice(0, limit - 1))
    .then(members => dispatch(fetchMembersWithSuccess(members)))
    .catch(({ response: { data } }) =>
      dispatch(fetchMembersWithError((data && data.error) || 'Something did wrong'))
    );
};

export const fetchMembersWithSuccess = members => ({
  type: 'FETCH_MEMBERS_SUCCESS',
  payload: members,
});

export const fetchMembersWithError = error => ({
  type: 'FETCH_MEMBERS_ERROR',
  payload: error,
});
