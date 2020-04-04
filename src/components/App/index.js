import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import shuffle from 'array-shuffle';
import Config from '../../Config';
import MembersList from '../MembersList';
import Button from '../Button';
import logo from '../../assets/devmt.jpg';
import './style.css';

function App(props) {
  const { limit } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  const handleRequestMembers = useCallback(
    () => {
      setIsLoading(true);
      setError(null);

      return axios
        .get(`${Config.get('SLACK_API_BASE_URL')}/users`)
        .then(({ data: { members } }) => members)
        .then(members => shuffle(members).splice(0, limit - 1))
        .then(members => {
          setMembers(members);
          setIsLoading(false);
        })
        .catch(({ response: { data } }) => {
          setError(data ? data.error : 'Something did wrong');
          setIsLoading(false);
        });
    },
    [limit]
  );

  return (
    <div className="App">
      <header className="App-section App-header">
        <img src={logo} className="App-logo" alt="DevMT" />
        <Button
          className="App-refreshButton"
          onClick={handleRequestMembers}
          variant="blank"
          disabled={isLoading}
        >
          Refresh
        </Button>
      </header>
      <section className="App-section App-content">
        <MembersList
          error={error}
          loading={isLoading}
          members={members}
          onRequest={handleRequestMembers}
        />
      </section>
    </div>
  );
}

App.propTypes = {
  limit: PropTypes.number.isRequired,
};

App.defaultProps = {
  limit: 16,
};

export default App;
