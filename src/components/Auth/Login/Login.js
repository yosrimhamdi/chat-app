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
import trySignIn from '@actions/trySignIn';

function Register({ handleSubmit, trySignIn, loading }) {
  const onFormSubmit = formValues => {
    trySignIn(formValues);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="violet" textAlign="center">
          <Icon name="code branch" color="violet" />
          LogIn for DevChat
        </Header>
        <Form size="large" onSubmit={handleSubmit(onFormSubmit)}>
          <Segment stacked>
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
            <Button
              color="violet"
              disabled={loading}
              className={loading ? 'loading' : ''}
              fluid
              size="large"
            >
              Submit
            </Button>
          </Segment>
        </Form>
        <Message>
          not a DevChat Member? <Link to="/register">Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

const WrappedForm = reduxForm({ form: 'loginForm', validate })(Register);

const mapStateToProps = state => {
  return { loading: state.auth.loading };
};

export default connect(mapStateToProps, { trySignIn })(WrappedForm);
