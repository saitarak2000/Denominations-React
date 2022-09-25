// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachitem, decrementvalue} = props
  const {value, id} = eachitem
  const buttonClicked = () => {
    decrementvalue(id)
  }
  return (
    <li>
      <button type="submit" onClick={buttonClicked}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
