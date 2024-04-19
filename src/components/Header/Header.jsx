import "./Header.css"
import world from "../../assets/world.png"


function Header() {
    return (
        <header>
            <img src={world}></img>
            my travel journal
        </header>
    )    
}

export default Header