import React, { PureComponent } from 'react';
import MembersList from '../MembersList';
import Button from '../Button';
import logo from '../../assets/devmt.jpg';
import './style.css';

const members = [
  {
    id: 'U04B5DP8G',
    color: 'd55aef',
    profile: {
      real_name_normalized: 'Romildo Paiter',
      display_name_normalized: 'romildopaiter',
      status_text: '',
      status_emoji: '',
      image_192:
        'https://secure.gravatar.com/avatar/fdcf02950dc81c0ceae2d109c1fbf2aa.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0024-192.png',
    },
    is_admin: false,
    is_owner: false,
    is_primary_owner: false,
    is_restricted: false,
    is_ultra_restricted: false,
    is_bot: false,
    is_app_user: false,
    updated: 1504212841,
    has_2fa: false,
  },
  {
    id: 'U04BA3FMQ',
    color: '43761b',
    profile: {
      real_name_normalized: 'Victor Hugo',
      display_name_normalized: '',
      status_text: '{}',
      status_emoji: ':robot_face:',
      image_192:
        'https://avatars.slack-edge.com/2018-04-18/349325093330_6d5e71fedcf0552ac1d1_192.jpg',
    },
    is_admin: true,
  },
  {
    id: 'U04BALC1E',
    color: 'e06b56',
    profile: {
      real_name_normalized: 'Ranlive Hrysyk',
      display_name_normalized: 'ranliveh',
      status_text: '',
      status_emoji: '',
      image_192:
        'https://secure.gravatar.com/avatar/f5d9d8c0691ea58621930269ef50b1f9.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0011-192.png',
    },
    is_admin: false,
  },
  {
    id: 'U04BC2BG4',
    color: '8f4a2b',
    profile: {
      real_name_normalized: 'Murillo Raggiotto',
      display_name_normalized: 'murillomr7',
      status_text: '',
      status_emoji: '',
      image_192:
        'https://avatars.slack-edge.com/2017-03-28/160948551570_5bd2388bfe2a4b6ff215_192.jpg',
    },
    is_admin: false,
  },
];

class App extends PureComponent {
  state = {
    loading: false,
    error: false,
    members,
  };

  fetchMembers = () => {
    // TODO: Fetch from server
  };

  render() {
    const { error, loading, members } = this.state;
    return (
      <div className="App">
        <header className="App-section App-header">
          <img src={logo} className="App-logo" alt="DevMT" />
          <Button className="App-refreshButton" onClick={this.fetchMembers} variant="blank">
            Refresh
          </Button>
        </header>
        <section className="App-section App-content">
          <MembersList error={error} loading={loading} members={members} />
        </section>
      </div>
    );
  }
}

export default App;
