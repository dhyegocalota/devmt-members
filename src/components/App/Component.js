import React, { PureComponent } from 'react';
import MembersList from '../MembersList';
import Button from '../Button';
import logo from '../../assets/devmt.jpg';
import './style.css';

class App extends PureComponent {
  static defaultProps = { limit: 16 };

  onFetchMembers = () => {
    const { fetchMembers, limit } = this.props;
    fetchMembers({ limit });
  };

  render() {
    const { error, loading, members } = this.props;
    return (
      <div className="App">
        <header className="App-section App-header">
          <img src={logo} className="App-logo" alt="DevMT" />
          <Button className="App-refreshButton" onClick={this.onFetchMembers} variant="blank">
            Refresh
          </Button>
        </header>
        <section className="App-section App-content">
          <MembersList
            error={error}
            loading={loading}
            members={members}
            fetchMembers={this.onFetchMembers}
          />
        </section>
      </div>
    );
  }
}

export default App;
