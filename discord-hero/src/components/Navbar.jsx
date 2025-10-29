import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'

function Navbar() {
    return (
        <nav>
            <img src={discordLogo} class="nav-left" />
            <img src={menuIcon} class="nav-right" />    
        </nav>
    )
}

export default Navbar