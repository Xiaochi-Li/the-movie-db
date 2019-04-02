import { types, getRoot } from 'mobx-state-tree'
import BaseViewModel from './BaseViewModel'

const MovieListViewModel = BaseViewModel.named('MovieListViewModel')
  .props({
    viewName: types.literal('MovieList')
  })
  .actions(self => ({
    loadPopularMoview () {
      getRoot(self).appModel.loadPopularMoview()
    }
  }))

export default MovieListViewModel
