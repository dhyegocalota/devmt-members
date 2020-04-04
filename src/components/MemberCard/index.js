import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Emoji } from 'emoji-mart';
import './style.css';

function MemberCard(props) {
  const {
    member: {
      color,
      is_admin,
      profile: {
        real_name_normalized,
        display_name_normalized,
        image_192,
        status_emoji,
        status_text,
      },
    },
  } = props;

  return (
    <div className="Member">
      <img src={image_192} alt={real_name_normalized} className="Member-avatar" />
      <div className="Member-content">
        <p className="Member-realname">
          <span>{real_name_normalized}</span>
          {status_emoji && (
            <span className="Member-emoji">
              <Emoji emoji={status_emoji} size={24} />
            </span>
          )}
        </p>
        <p className="Member-displayname">@{display_name_normalized}</p>
        <div className="Member-badges">
          <span className="Member-badge" style={{ backgroundColor: `#${color}` }}>
            {is_admin ? (
              <Fragment>
                <span>Admin</span> <Emoji emoji="star" size={12} />
              </Fragment>
            ) : (
              'User'
            )}
          </span>
        </div>
        <p className="Member-status">{status_text}</p>
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    color: PropTypes.string.isRequired,
    is_admin: PropTypes.bool.isRequired,
    profile: PropTypes.shape({
      real_name_normalized: PropTypes.string.isRequired,
      display_name_normalized: PropTypes.string.isRequired,
      image_192: PropTypes.string.isRequired,
      status_emoji: PropTypes.string.isRequired,
      status_text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MemberCard;
