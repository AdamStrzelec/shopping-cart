import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './views/Home';
import Product from './views/Product';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache()
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/product/:slug'} component={Product} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
