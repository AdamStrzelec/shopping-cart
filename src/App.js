import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from './config/Apollo';
import Home from './views/Home';
import Product from './views/Product';
import Navbar from './components/Navbar/Navbar';
import ShoppingCartContainer from './components/ShoppingCartContainer/ShoppingCartContainer';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <Navbar />
            <ShoppingCartContainer />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/product/:slug'} component={Product} />
            </Switch>
          </Router>
        </ApolloProvider>
      </Provider>
    </div>
  );
}

export default App;
