import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TerminalContextProvider } from 'react-terminal';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </StrictMode>,
);
