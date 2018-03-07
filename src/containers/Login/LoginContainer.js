import {
  compose,
  setDisplayName,
  withStateHandlers,
  withState,
  withHandlers
} from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import ons from 'onsenui';
import gql from 'graphql-tag';
import {
  saveCurrentUser,
  saveToken,
} from './LoginActions';
import Login from './Login';
import MainPage from '../MainPage';
import {
  AuthenticateUser,
  SignUpUser,
} from '../../queries/user-profile';

const enchance = compose(
  setDisplayName('Login'),
  withState('loginUsername', 'setLoginUsername', ''),
  withState('loginPassword', 'setLoginPassword', ''),
  withState('regisUsername', 'setRegisUsername', ''),
  withState('regisPassword', 'setRegisPassword', ''),
  withState('regisPasswordCon', 'setRegisPasswordCon', ''),
  graphql(
    gql`${AuthenticateUser}`,
    {
      props: ({ mutate,  ownProps: { loginUsername, loginPassword } }) => ({
        authenticateUser: () => {
          return mutate({
          variables: {
            email: loginUsername,
            password: loginPassword,
          }
        })},
      }),
    }
  ),
  graphql(
    gql`${SignUpUser}`,
    {
      props: ({ mutate,  ownProps: { regisUsername, regisPassword } }) => ({
        signupUser: () => {
          return mutate({
          variables: {
            email: regisUsername,
            password: regisPassword,
          }
        })},
      }),
    }
  ),
  connect(
    undefined,
    {
      saveCurrentUser,
      saveToken,
    },
  ),
  withHandlers({
    back: ({ navigator }) => () => navigator.popPage(),
  }),
  withHandlers({
    login: ({ authenticateUser, saveToken, navigator }) => async () => {
      try {
        const res = await authenticateUser();
        const { token } = res.data.authenticateUser;
        saveToken(token);
        navigator.pushPage(
          { component: MainPage },
          { animation: 'lift' },
        );
      } catch (error) {
        console.log(error);
        ons.notification.alert('Incorrect username or password.');
      }
    },
    register: ({
      signupUser,
      regisPassword,
      regisPasswordCon,
      navigator
    }) => async () => {
      try {
        if (regisPassword !== regisPasswordCon) {
          ons.notification.alert('Passwords is not match.');
          return;
        }
        const res = await signupUser();
        const { token } = res.data.signupUser;
        saveToken(token);
        navigator.pushPage(
          { component: MainPage },
          { animation: 'lift' },
        );
      } catch (error) {
        console.log(error);
        ons.notification.alert('Register is not success.');
      }
    },
  }),
  withStateHandlers(() => ({ mode: 'login' }), {
    toLoginForm: () => () => ({ mode: 'login' }),
    toRegisterForm: () => () => ({ mode: 'register' }),
  })
);

const LoginContainer = enchance(Login);

export default LoginContainer;
