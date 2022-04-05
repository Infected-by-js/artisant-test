import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GlobalStyles } from './assets/styles/GlobalStyles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
