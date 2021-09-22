import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import AuthInput from '../AuthInput';
import validate from './validate.js';
import tryRegister from '../../../firebase/auth/tryRegister';
import { AUTHENTICATING } from '@types';
import setLoading from '@actions/setLoading';

function Register({ handleSubmit, isAuthenticating, setLoading }) {
  const onFormSubmit = async formValues => {
    setLoading(AUTHENTICATING, true);

    await tryRegister(formValues);

    setLoading(AUTHENTICATING, false);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="violet" textAlign="center">
          <Icon name="puzzle piece" color="violet" />
          Register for DevChat
        </Header>
        <Form size="large" onSubmit={handleSubmit(onFormSubmit)}>
          <Segment stacked>
            <Field
              name="username"
              icon="user"
              type="text"
              placeholder="Username"
              component={AuthInput}
            />
            <Field
              name="email"
              icon="mail"
              type="email"
              placeholder="Email Address"
              component={AuthInput}
            />
            <Field
              name="password"
              icon="lock"
              type="password"
              placeholder="Password"
              component={AuthInput}
            />
            <Field
              name="passwordConfirmation"
              icon="repeat"
              type="password"
              placeholder="Password Confirmation"
              component={AuthInput}
            />
            <Button
              color="violet"
              disabled={isAuthenticating}
              className={isAuthenticating ? 'loading' : ''}
              fluid
              size="large"
            >
              Submit
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a user? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

const WrappedForm = reduxForm({ form: 'registerForm', validate })(Register);

const mapStateToProps = state => {
  return { isAuthenticating: state.loading.isAuthenticating };
};

export default connect(mapStateToProps, { setLoading })(WrappedForm);
