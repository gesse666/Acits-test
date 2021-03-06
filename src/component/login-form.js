import React from 'react';
import { connect } from 'react-redux';
import { Field, Control, Form } from 'react-redux-form';
import  {getToken}  from '../store/actions/authAction';
import {Redirect, WithRouter} from 'react-router-dom';

class LoginForm extends React.Component {

handleSubmit = (val) => {
  this.props.getToken(val)
};

  render() {
    let { user } = this.props;
    let {isAuth} = this.props.isAuth;
    if(isAuth) return <Redirect to={"/Today"}/>
    return (
     
      <Form model="user"  onSubmit={(val) => this.handleSubmit(val)}>
        <Field model="user.username" required>
          <label>Username</label>
          <input type="text" />
        </Field>

        <Field model="user.password" required>
          <label>Password</label>
          <input type="password" />
        </Field>

        <button>
          Log in as { user.username }
        </button>
      </Form>
    )
  }
}






const mapDispatchToProps = (dispatch) => {
  return {
      getToken: (loading, token, isAuth) => dispatch(getToken(loading, token,isAuth)),
  }
}

const mapStateToProps = (state) => ({ token: state.token, user: state.user, isAuth:state.isAuth});

export default connect(mapStateToProps, mapDispatchToProps )(LoginForm);

// export default connect(selector)(LoginForm);



