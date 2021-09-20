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

import './Register.scss';
import Input from '../Input';
import validate from './validate.js';
import register from '@actions/register';

function Register({ handleSubmit, register, loading }) {
  const onFormSubmit = (formValues) => {
    register(formValues);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="register">
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
              component={Input}
            />
            <Field
              name="email"
              icon="mail"
              type="email"
              placeholder="Email Address"
              component={Input}
            />
            <Field
              name="password"
              icon="lock"
              type="password"
              placeholder="Password"
              component={Input}
            />
            <Field
              name="passwordConfirmation"
              icon="repeat"
              type="password"
              placeholder="Password Confirmation"
              component={Input}
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
          Already a user? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

const WrappedForm = reduxForm({ form: 'registerForm', validate })(Register);

const mapStateToProps = (state) => {
  return { loading: state.auth.loading };
};

export default connect(mapStateToProps, { register })(WrappedForm);
