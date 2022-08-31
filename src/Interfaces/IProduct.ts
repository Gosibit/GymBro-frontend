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
