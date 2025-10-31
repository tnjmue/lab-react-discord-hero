import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'

function Navbar() {
    return (
        <nav>
            <img src={discordLogo} className="nav-left" />
            <img src={menuIcon} className="nav-right" />    
        </nav>
    )
}

export default Navbar