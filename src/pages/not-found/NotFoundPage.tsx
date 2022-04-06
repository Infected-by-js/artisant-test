import {useNavigate} from 'react-router-dom';
import {PageError} from '../../components';
import {HOME_PAGE_ROUTE} from '../../router/routes';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(HOME_PAGE_ROUTE);
  };
  return <PageError error="404 Page Not Found" handleBack={handleClickBack} />;
};
