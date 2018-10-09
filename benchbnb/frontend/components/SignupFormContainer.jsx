import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signUp } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signUp(user))
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SignupFormContainer;
