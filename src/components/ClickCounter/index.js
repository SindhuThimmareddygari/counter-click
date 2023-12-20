import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  click = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="description">
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="button" onClick={this.click} type="button">
          click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
