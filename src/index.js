import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
// import 'antd/dist/antd.css'
import "antd/dist/antd.min.css"
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-alice-carousel/lib/alice-carousel.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} > 
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
    
  </React.StrictMode>
);

