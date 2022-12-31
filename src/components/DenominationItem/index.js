import './index.css'

const DenominationItem = props => {
  const {itemDetails, withdrawAmount} = props
  const {value} = itemDetails

  const onWithdraw = () => {
    withdrawAmount(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
