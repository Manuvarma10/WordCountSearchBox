import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  getWord = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="content-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="letter" className="label-style">
              Enter the phrase
            </label>
            <br />
            <input
              onChange={this.getWord}
              className="input-style"
              placeholder="Enter the phrase"
              id="letter"
              type="text"
            />
            <br />
            <p className="button-style" type="button">
              No.of letters: {count.length}
            </p>
          </div>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
