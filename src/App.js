import React, { Component } from "react";
import { fetchPolularMovies } from "./utils/movieAPI";
import { Provider } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./assets/theme";
import Store from "./mobxCore/Store";
import { MovieDetail, MovieList } from "./views";

const store = Store.create({});
store.loadPopularMovies();

fetchPolularMovies();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={MovieList} />
              <Route path="/movies/:id" component={MovieDetail} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
