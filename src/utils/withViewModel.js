import { inject } from "mobx-react";
import React from "react";

// a higher order component inject related viewModel when navigate to new page,
// destroy the viewModel of previous page.
function withViewModel(viewName, id) {
  return WrappedComponent =>
    inject("store")(
      class extends React.Component {
        constructor(props) {
          super(props);
          this.initialize();
        }

        componentWillUnmount() {
          this.viewModel.destroy();
        }

        initialize = () => {
          const { store } = this.props;
          this.viewModel = store.mainViewModel.createViewModel(
            viewName,
            id || viewName
          );
        };

        render() {
          return (
            <WrappedComponent viewModel={this.viewModel} {...this.props} />
          );
        }
      }
    );
}

export default withViewModel;
