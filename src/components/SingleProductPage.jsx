import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { BACKEND_URL } from "../constantVariables";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Stack } from "@mui/material";
import "./SingleProductPage.css";
import { formatCurrency } from "../utils/formatCurrency";
import AddToCartButton from "./buttons/AddToCartButton";
import CartContext from "./context/cart/CartContext";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState();
  const { getCartItemQuantity } = useContext(CartContext);

  const getProductInfo = async () => {
    if (productId) {
      axios.get(`${BACKEND_URL}/products/${productId}`).then((response) => {
        setProduct(response.data);
        console.log(response.data);
        console.log(product);
      });
    }
  };

  useEffect(() => {
    getProductInfo();
  }, [productId]);

  // Update product ID in state if needed to trigger data retrieval
  const params = useParams();
  if (productId !== params.productId) {
    setProductId(params.productId);
  }

  const price = formatCurrency(product.price);

  // const quantityInCart = 0;
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  const itemCounts = cartItems.reduce((count, item) => {
    const itemId = item.id;
    count[itemId] = (count[itemId] || 0) + 1;
    return count;
  }, {}); // return an obj that stores number of copies of each item placed in cart

  // console.log(itemCounts);

  const calcNumOfCurrItemInCart = (id) => {
    const isProductInCart = id in itemCounts; // check if this product is in cart
    if (isProductInCart) return itemCounts[id];
    else return 0;
  };

  const quantityInCart = calcNumOfCurrItemInCart(product.id);
  console.log(getCartItemQuantity(product.id));

  const productDetails = (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} display="flex" justifyContent="center">
          <div className="image">
            <img src={product.img} alt="product_img" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          display="flex"
          // justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2}>
            <div className="header">{product.title && product.title}</div>
            <div className="price">{product.price && price}</div>
            <div className="text">
              {product.description && product.description}
            </div>

            <div className="in-stock">
              In stock: {product.stock_left && product.stock_left}
            </div>
            <AddToCartButton
              quantityInCart={quantityInCart}
              product={product}
            />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <Navbar />
      {product && productDetails}
    </div>
  );
};

export default SingleProductPage;
