import { getAvatarName } from "../../helpers/getAvatarName";
import type { IProduct } from "../../types/Product";
import { ProductCard } from "../product-card/ProductCard";
import * as S from "./ProductList.styled";

type Props = {
  products: IProduct[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <S.ProductList>
      {products &&
        products.map((product: IProduct) => (
          <S.ProductItem key={product.product_id}>
            <ProductCard
              author={product.created_by.display_name}
              quantity={product.quantity_available}
              quantityTotal={product.quantity_nfts_created}
              name={product.name}
              price={product.initial_price}
              avatarName={getAvatarName(product.avatar)}
            />
          </S.ProductItem>
        ))}
    </S.ProductList>
  );
};
