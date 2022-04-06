import { useMemo, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { useFilterProducts } from "./hooks/useFilterProducts";

import { PAGE_LIMIT } from "./helpers/constants";
import {
  Header,
  ProductList,
  Container,
  Filter,
  LoaderPage
} from "./components/";

let currentPage = 1;

export const App = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const { products, isLoading, error } = useProducts(currentPage, PAGE_LIMIT);
  const filteredProducts = useFilterProducts(products, isAvailable);

  const showedProducts = useMemo(() => filteredProducts?.length, [
    filteredProducts
  ]);
  const totalProducts = useMemo(() => products?.length, [products]);

  const handleToggleAvailable = () => {
    setIsAvailable((prev) => !prev);
  };

  return (
    <>
      <LoaderPage isShow={isLoading} />
      {!isLoading && (
        <>
          <Header />
          <Container>
            <Filter
              isAvailable={isAvailable}
              showed={showedProducts}
              total={totalProducts}
              handleToggleAvailable={handleToggleAvailable}
            />
            <ProductList products={filteredProducts} />
          </Container>
        </>
      )}
    </>
  );
};
