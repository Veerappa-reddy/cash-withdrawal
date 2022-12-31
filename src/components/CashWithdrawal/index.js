import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {withdrawAmount: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({
      withdrawAmount: prevState.withdrawAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {withdrawAmount} = this.state

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <h1 className="icon">s</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {withdrawAmount}
              <br />
              <span className="amount-in-rupess">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                itemDetails={eachAmount}
                key={eachAmount.id}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
