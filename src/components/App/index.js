import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './Component';
import { fetchMembers } from '../../actions';

const mapStateToProps = ({ members }) => members;
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMembers,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
