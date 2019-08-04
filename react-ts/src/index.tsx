import React from 'react'
import ReactDom from 'react-dom'

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  state = { counter: 0 }

  plusOne = (): void => {
    this.setState(({ counter }) => ({ counter: counter + 1 }))
  }

  minusOne = (): void => {
    this.setState(({ counter }) => ({ counter: counter - 1 }))
  }

  render() {
    return (
      <div>
        <button onClick={this.plusOne}>Plus One</button>
        <button onClick={this.minusOne}>Minus One</button>
        {this.state.counter}
      </div>
    )
  }
}

ReactDom.render(<App color="red"/>, document.querySelector('#root'))