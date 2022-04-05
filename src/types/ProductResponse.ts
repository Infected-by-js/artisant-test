type Image = {
  original: string;
  compressed?: string;
};

type CreatedBy = {
  custom_url: string;
  display_name: string;
  image: Image;
  public_address: string;
  user_id: number;
};

export interface ProductResponse {
  avatar: Image;
  created_at: string;
  created_by: CreatedBy;
  description: string;
  initial_price: number;
  name: string;
  product_id: number;
  quantity: number;
  quantity_available: number;
  quantity_nfts_created: number;
}
