import {createRoot} from 'react-dom/client';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GlobalStyles} from './helpers/GlobalStyles';
import {AppRouter} from './router/AppRouter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <GlobalStyles />
    <AppRouter />
  </QueryClientProvider>
);
