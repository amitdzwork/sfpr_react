import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import 'bootstrap/dist/css/bootstrap.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);


