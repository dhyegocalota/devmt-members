import React, { PureComponent } from 'react';
import Loading from '../Loading';
import Error from '../Error';
import MemberCard from '../MemberCard';
import './style.css';

export default class MembersList extends PureComponent {
  static defaultProps = {
    loading: false,
    error: false,
    members: [],
  };

  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    const { loading, error, members, fetchMembers } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error reason={error} onRetry={fetchMembers} />;
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
