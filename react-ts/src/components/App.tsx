import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[];
  fetchTodos(): any
}

export class App extends Component<AppProps> {

  onClick = (): void => {
    this.props.fetchTodos()
  }

  renderList = (): JSX.Element => {
    return (
      <>
        {this.props.todos.map(todo => {
          return (
            <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.completed}</p>
          </div>
          )
  })}
      </>
    )
  }

  render() {
    return (
    <>
      <button onClick={this.onClick}>Fetch</button>
      {this.renderList()}
    </>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
})

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: dispatch
// })

export default connect(mapStateToProps, { fetchTodos })(App)
