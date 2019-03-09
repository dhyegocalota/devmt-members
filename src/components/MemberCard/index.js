import React, { Component } from 'react';
import { Emoji } from 'emoji-mart';
import './style.css';

export default class MemberCard extends Component {
  render() {
    const {
      member: {
        color,
        is_admin,
        profile: { real_name_normalized, image_192, status_emoji, status_text },
      },
    } = this.props;
    return (
      <div className="Member">
        <img src={image_192} alt={real_name_normalized} className="Member-avatar" />
        <div className="Member-content">
          <p className="Member-realname">
            <span>Dhyego Calota</span>
            {status_emoji && (
              <span className="Member-emoji">
                <Emoji emoji={status_emoji} size={24} />
              </span>
            )}
          </p>
          <p className="Member-displayname">@dhyegocalota</p>
          <div className="Member-badges">
            <span className="Member-badge" style={{ backgroundColor: `#${color}` }}>
              {is_admin ? 'Admin' : 'User'}
            </span>
          </div>
          <p className="Member-status">{status_text}</p>
        </div>
      </div>
    );
  }
}
