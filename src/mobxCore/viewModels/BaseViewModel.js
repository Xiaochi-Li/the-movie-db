import { types, getRoot } from 'mobx-state-tree'

/**
 * this is the model that abstract the functionality shared among all view models,
 * all other models should compose with this ViewModel.
 */
const BaseViewModel = types
  .model('BaseViewModel', {
    id: types.identifier,
    viewName: types.literal('Please override me in the ViewModel')
  })
  .actions(self => ({
    destroy () {
      return getRoot(self).mainViewModel.destroyViewModel(self)
    }
  }))

export default BaseViewModel
