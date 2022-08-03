// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {showText: false}

  onShow = () => {
    this.setState(prevState => ({showText: !prevState.showText}))
  }

  render() {
    const {showText} = this.state

    return (
      <div className="container">
        <div className="container2">
          <Message showText={showText} />
          {showText ? (
            <Logout logout={this.onShow} />
          ) : (
            <Login login={this.onShow} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
