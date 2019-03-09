import React, { PureComponent } from 'react';
import axios from 'axios';
import shuffle from 'array-shuffle';
import Config from '../../Config';
import MembersList from '../MembersList';
import Button from '../Button';
import logo from '../../assets/devmt.jpg';
import './style.css';

class App extends PureComponent {
  static defaultProps = { limit: 16 };

  state = {
    loading: false,
    error: false,
    members: [],
  };

  componentDidMount() {
    this.fetchMembers();
  }

  fetchMembers = () => {
    const { limit } = this.props;
    this.setState({ loading: true, error: false });
    axios
      .get(`${Config.get('SLACK_API_BASE_URL')}/users`)
      .then(({ data: { members } }) => members)
      .then(members => shuffle(members).splice(0, limit - 1))
      .then(members => this.setState({ members, loading: false }))
      .catch(({ response: { data } }) =>
        this.setState({ loading: false, error: (data && data.error) || 'Something did wrong' })
      );
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
          <MembersList
            error={error}
            loading={loading}
            members={members}
            fetchMembers={this.fetchMembers}
          />
        </section>
      </div>
    );
  }
}

export default App;
