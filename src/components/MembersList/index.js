import React, { Component } from 'react';
import Loading from '../Loading';
import Error from '../Error';
import MemberCard from '../MemberCard';
import './style.css';

export default class MembersList extends Component {
  static defaultProps = {
    loading: false,
    error: false,
    members: [
      {
        id: 32,
        color: '9f69e7',
        is_admin: true,
        profile: {
          status_text: 'Print is dead',
          status_emoji: ':books:',
          real_name_normalized: 'Egon Spengler',
          display_name_normalized: 'spengler',
          image_192: 'https://avatars1.githubusercontent.com/u/5576007?s=460&v=4',
        },
      },
      {
        id: 34,
        color: '9f69e7',
        is_admin: true,
        profile: {
          status_text: 'Print is dead',
          status_emoji: ':books:',
          real_name_normalized: 'Egon Spengler',
          display_name_normalized: 'spengler',
          image_192: 'https://avatars1.githubusercontent.com/u/5576007?s=460&v=4',
        },
      },
    ],
  };

  fetchMembers = () => {
    alert('Retrying...');
  };

  render() {
    const { loading, error, members } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error reason={error} onRetry={this.fetchMembers} />;
    }

    return (
      <div className="Members">
        {members.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    );
  }
}
