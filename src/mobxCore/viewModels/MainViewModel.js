import { types, destroy } from 'mobx-state-tree'
import MovieListViewModel from './MovieListViewModel'
export const ViewModel = types.union(MovieListViewModel)

const MainViewModel = types
  .model('ViewModel', {
    viewModels: types.optional(types.array(ViewModel), [])
  })
  .views(self => ({
    // Returns the first view model of a certain name
    viewModelByName (viewName) {
      return self.viewModels.find(viewModel => viewModel.viewName === viewName)
    },
    viewModelById (id) {
      return self.viewModels.find(viewModel => viewModel.id === id)
    }
  }))
  .actions(self => ({
    createViewModel (viewName, id, params = {}) {
      console.log('Creating view model', viewName)
      const newViewModel = ViewModel.create({
        viewName,
        id: id || viewName, // default to viewName for id
        params
      })
      self.viewModels.push(newViewModel)
      return newViewModel
    },
    destroyViewModel (viewModel) {
      console.log('Destroying view model', viewModel.viewName)
      destroy(viewModel)
    }
  }))

export default MainViewModel
