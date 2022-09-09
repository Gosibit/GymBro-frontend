import IProduct from "./IProduct";

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface IShoppingCartProduct {
  product: IProduct;
  quantity: number;
  size: Size;
}

export interface IShoppingCart {
  _id?: string;
  products?: IShoppingCartProduct[];
  total?: number;
}
