import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export class App extends Component<AppProps> {

  onClick = (): void => {
    this.props.fetchTodos()
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList = (): JSX.Element => {
    return (
      <>
        {this.props.todos.map(todo => {
          return (
            <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
              <h2>{todo.title}</h2>
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

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App)
