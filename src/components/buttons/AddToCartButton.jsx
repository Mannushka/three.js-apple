import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import CartContext from "../context/cart/CartContext";

const AddToCartButton = (props) => {
  const {
    addToCart,
    decreaseQuantity,
    removeItem,
    increaseQuantity,
    getCartItemQuantity,
  } = useContext(CartContext);

  const quantityInCart = getCartItemQuantity(props.product.id);
  return (
    <div>
      {/* props.quantityInCart */}
      {quantityInCart === 0 ? (
        <Button size="small" onClick={() => addToCart(props.product)}>
          Add to cart
        </Button>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="outlined"
            size="small"
            style={{ padding: "4px", minWidth: "24px" }}
            onClick={() => increaseQuantity(props.product.id)}
          >
            +
          </Button>

          <span style={{ margin: "0 10px" }}>{quantityInCart} in cart</span>

          <Button
            variant="outlined"
            size="small"
            style={{ padding: "4px", minWidth: "24px" }}
            onClick={() => decreaseQuantity(props.product.id)}
          >
            -
          </Button>
          <DeleteIcon
            style={{ margin: "auto 15px" }}
            onClick={() => removeItem(props.product.id)}
          />
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
