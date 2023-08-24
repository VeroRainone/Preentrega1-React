import logoLibreria from "../assets/Logo.jpg"
import CartWidget from "./CartWidget";


export default function Navbar (){
    return(
        <nav className="navbar">
            <img className="logo" src={logoLibreria} alt="Logo libreria" />
            <ul>
                <li>Home</li>
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Contactos</li>
                <CartWidget />
            </ul>
            
        </nav>
    );
}

