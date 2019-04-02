/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names,no-param-reassign */
import { types, flow } from 'mobx-state-tree'
import { MovieModel } from '../models/MovieModel'
import { fetchPolularMovies } from '../../utils/movieAPI'

const AppModel = types
  .model('AppModel', { movies: types.array(MovieModel) })
  .actions(self => ({
    loadPopularMoview: flow(function * load () {
      const response = yield fetchPolularMovies()
      console.log(response)
    })
  }))
export default AppModel
