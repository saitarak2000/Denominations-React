// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {value: 2000}

  decrementvalue = id => {
    const {value} = this.state
    console.log(`decrement clicked ${id}`)
    if (id === 1 && value >= 50) {
      this.setState(prevState => ({
        value: prevState.value - 50,
      }))
    } else if (id === 2 && value >= 100) {
      this.setState(prevState => ({
        value: prevState.value - 100,
      }))
    } else if (id === 3 && value >= 200) {
      this.setState(prevState => ({
        value: prevState.value - 200,
      }))
    } else if (id === 4 && value >= 500) {
      this.setState(prevState => ({
        value: prevState.value - 500,
      }))
    }
  }

  render() {
    const {value} = this.state

    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="profile">
            <div className="profile-icon">S</div>
            <p>Sarah Wiliams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="two-in-one">
              <p className="number">{value}</p>
              <p className="rupees">In rupees</p>
            </div>
          </div>
          <div className="withdraw-statement">
            <p className="withdraw">Withdraw</p>
            <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominations-buttons">
            {denominationsList.map(eachitem => (
              <DenominationItem
                decrementvalue={this.decrementvalue}
                eachitem={eachitem}
                key={eachitem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
