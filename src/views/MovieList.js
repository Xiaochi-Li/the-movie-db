import React from 'react'
import withViewModel from '../utils/withViewModel'
import { observer } from 'mobx-react'

const MovieList = props => {
  const { loadPopularMoview } = props.viewModel
  console.log(props.viewModel)
  loadPopularMoview()
  return <div />
}

MovieList.defaultProps = {}

MovieList.propTypes = {}

export default withViewModel('MovieList')(observer(MovieList))
