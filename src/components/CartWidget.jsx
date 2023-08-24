import carritoLogo from "../assets/Logo-carrito.svg"

const CartWidget = () =>{
    return(
        <div>
            <img  className="carrito" src={carritoLogo} alt="Logo Carrito" />  
            <span className="cantidad" >0</span>
        </div>          
    )
};

export default CartWidget
