// Write your code here.
import './index.css'

const NavBar = () => (
  <div className="nav-bar-container">
    <div className="navbar-logo-container">
      <img
        className="emoji-logo"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <p className="game-title">Emoji Game</p>
    </div>
    <div className="score-container">
      <p className="score"> Score: 0</p>
      <p>Top Score: 0</p>
    </div>
  </div>
)

export default NavBar
