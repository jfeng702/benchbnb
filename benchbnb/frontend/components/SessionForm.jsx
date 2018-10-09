import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
      // console.log(e);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return this.props.errors.map(err => <h1>err</h1>);
  }

  render() {
    const linkAddress = this.props.formType === 'login' ? '/signup' : '/login';
    const linkText = linkAddress === '/signup' ? 'Signup' : 'Login';

    return (
      <div>
        <header>{this.props.formType}</header>
        <Link to={linkAddress}>{linkText}</Link>
        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}/>
          </label>
          <label>
            Password:
            <input type="text"
              value={this.state.password}
              onChange={this.handleChange('password')} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
