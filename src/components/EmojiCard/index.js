// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails} = props
  const {emojiName, emojiUrl} = emojiCardDetails

  return (
    <li>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
