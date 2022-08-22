export enum Category {
  TSHIRTS = "T-Shirts",
  ACCESORIES = "Accessories",
}

export enum Gender {
  MEN = "Men",
  WOMEN = "Women",
  UNISEX = "Unisex",
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  category: Category;
  gender: Gender;
  imageUrls: {
    original: string;
    thumbnail: string;
  };
}

export default IProduct;
