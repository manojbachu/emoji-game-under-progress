/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(shuffledEmojisList)
    return (
      <div className="emoji-game-container">
        <NavBar />
        <ul className="emoji-card-list-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard emojiCardDetails={eachEmoji} key={eachEmoji.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
