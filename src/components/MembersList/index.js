import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Error from '../Error';
import MemberCard from '../MemberCard';
import './style.css';

function MembersList(props) {
  const { loading: isLoading, error, members, onRequest: handleRequest } = props;

  useEffect(
    () => {
      handleRequest();
    },
    [handleRequest]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error reason={error} onRetry={handleRequest} />;
  }

  return (
    <div className="Members">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

MembersList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      is_admin: PropTypes.bool.isRequired,
      profile: PropTypes.shape({
        real_name_normalized: PropTypes.string.isRequired,
        display_name_normalized: PropTypes.string.isRequired,
        image_192: PropTypes.string.isRequired,
        status_emoji: PropTypes.string.isRequired,
        status_text: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  onRequest: PropTypes.func.isRequired,
};

export default MembersList;
