export interface IImage {
  original: string;
  compressed?: string;
}

export interface ICreatedBy {
  user_id: number;
  display_name: string;
  image: IImage;
}

export interface IProduct {
  avatar: IImage;
  created_by: ICreatedBy;
  initial_price: number;
  name: string;
  product_id: number;
  quantity_available: number;
  quantity_nfts_created: number;
}
