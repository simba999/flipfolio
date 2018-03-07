import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import store from './configurationStore';
import { ENDPOINT } from './constants/api';

const httpLink = createHttpLink({
  uri: ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = store.getState().currentUser.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
