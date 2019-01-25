import React, { PureComponent } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import SubRoute from "./components/SubRoute";

import "semantic-ui-css/semantic.min.css";
import "./styles/app.css";

const store = configureStore();
class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Switch>
              <Route path="/:subreddit/:view" component={SubRoute} />
              <Redirect from="/" to="/all/hot" exact={true} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
