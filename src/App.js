import React, { Component } from "react";
import { fetchPolularMovies } from "./utils/movieAPI";
import { Provider } from "mobx-react";
import Store from "./mobxCore/Store";
import MovieList from "./views/MovieList";

const store = Store.create({});
store.loadPopularMovies();

fetchPolularMovies();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MovieList />
        </div>
      </Provider>
    );
  }
}

export default App;
