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
        id: '324sdsf',
        color: '9f69e7',
        is_admin: true,
        is_bot: false,
        profile: {
          status_text: 'Print is dead',
          status_emoji: ':books:',
          real_name: 'Egon Spengler',
          display_name: 'spengler',
          real_name_normalized: 'Egon Spengler',
          display_name_normalized: 'spengler',
          email: 'spengler@ghostbusters.example.com',
          image_192: 'https://avatars1.githubusercontent.com/u/5576007?s=460&v=4',
        },
      },
      {
        id: '324sd2sf',
        color: '9f69e7',
        is_admin: false,
        profile: {
          status_text: 'Print is dead',
          status_emoji: ':books:',
          real_name: 'Egon Spengler',
          display_name: 'spengler',
          real_name_normalized: 'Egon Spengler',
          display_name_normalized: 'spengler',
          email: 'spengler@ghostbusters.example.com',
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
