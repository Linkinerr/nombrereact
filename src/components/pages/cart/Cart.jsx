import { Button } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {

const { cart, clearCart, deleteProductById, getTotalPrice } =useContext(CartContext)
let  total = getTotalPrice();
const clearCartWithAlert = () => {
  Swal.fire({
    title: "Seguro quieres limpiar el carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si, eliminar!",
    denyButtonText: `No, no eliminar!`,
  }).then((result) => {
    if (result.isConfirmed) {
      clearCart();
      Swal.fire("Carrito eliminado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("El carrito queda como estaba", "", "warning");
    }
  });
};


  return (
    <div>
      <h1>Estoy en el carrito</h1>
    {cart.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <h2>cantidad: {product.quantity}</h2>
        <Button onClick={ ()=>deleteProductById(product.id)}>Eliminar</Button>
      </div>
      
    ))}

    {
    cart.length > 0 && (
      <div>
        <h4>El total a pagar es: {total}</h4>

<Link to="/checkout">
<Button variant="contained">Finalizar compra</Button>
</Link>

<Button variant="contained" onClick={clearCartWithAlert}>
  Vaciar Carrito</Button>
    </div>
  )}
  </div>
  );
    };

export default Cart;
