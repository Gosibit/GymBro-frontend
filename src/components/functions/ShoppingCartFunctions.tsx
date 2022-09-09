// import axios from "axios";
// import { useContext } from "react";
// import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
// import { UserContext } from "../../contexts/UserContext";
// import { IShoppingCartProduct } from "../../Interfaces/IShoppingCart";

// // const { user, setUser } = useContext(UserContext);
// // const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

// const getHeaders = () => {
//   const headers = user
//     ? {
//         Authorization: "Bearer " + localStorage.getItem("accessToken"),
//       }
//     : undefined;
//   return headers;
// };

// export function setShoppingCartUserRequest() {
//   axios
//     .get(process.env.REACT_APP_BE_DOMAIN + "/shopping-carts", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("accessToken"),
//       },
//     })
//     .then((res) => {
//       setShoppingCart(res.data);
//     });
// }

// export function setShoppingCartAnonymousRequest() {
//   axios
//     .get(process.env.REACT_APP_BE_DOMAIN + "/shopping-carts", {
//       params: {
//         shoppingCartId: shoppingCart._id,
//       },
//     })
//     .then((res) => {
//       setShoppingCart(res.data);
//     });
// }

// export function deleteProduct({ product, size }: IShoppingCartProduct) {
//   axios
//     .delete(
//       process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/delete-from-cart",
//       {
//         headers: getHeaders(),
//         params: {
//           shoppingCartId: shoppingCart._id,
//           productId: product._id,
//           size: size,
//         },
//       }
//     )
//     .then((res) => {
//       setShoppingCart(res.data);
//     });
// }

// export function updateProductQuantity({
//   product,
//   size,
//   quantity,
// }: IShoppingCartProduct) {
//   axios
//     .put(
//       process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/update-cart",
//       {
//         shoppingCartId: shoppingCart._id,
//         productId: product._id,
//         size: size,
//         quantity: quantity,
//       },
//       {
//         headers: getHeaders(),
//       }
//     )
//     .then((res) => {
//       setShoppingCart(res.data);
//     });
// }

// export function addToCart({ product, size, quantity }: IShoppingCartProduct) {
//   axios
//     .post(
//       process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/add-to-cart",
//       {
//         shoppingCartId: shoppingCart._id,
//         productId: product._id,
//         size: size,
//         quantity: quantity,
//       },
//       {
//         headers: getHeaders(),
//       }
//     )
//     .then((res) => {
//       setShoppingCart(res.data);
//     });
// }
export default () => {};
