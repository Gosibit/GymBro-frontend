import { createContext } from "react";
import { IShoppingCart } from "../Interfaces/IShoppingCart";
type ShoppingCartContextType = {
  shoppingCart: IShoppingCart;
  setShoppingCart: (shoppingCart: any) => void;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  shoppingCart: {},
  setShoppingCart: () => {},
});
