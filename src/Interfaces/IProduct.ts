export enum Category {
  TSHIRTS = "T-Shirts",
  ACCESORIES = "Accessories",
}

export enum Gender {
  MEN = "M",
  WOMEN = "F",
  UNISEX = "U",
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  gender: Gender;
  category: Category;
  imageUrls: {
    original: {
      publicId: string;
      url: string;
    };
    thumbnail: {
      publicId: string;
      url: string;
    };
  };
  _id: string;
}

export default IProduct;
