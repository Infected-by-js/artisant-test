import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HOME_PAGE_ROUTE, PRODUCT_PAGE_ROUTE} from './routes';
import {HomePage} from '../pages/home/HomePage';
import {ProductPage} from '../pages/product/ProductPage';
import {NotFoundPage} from '../pages/not-found/NotFoundPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={PRODUCT_PAGE_ROUTE} element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
