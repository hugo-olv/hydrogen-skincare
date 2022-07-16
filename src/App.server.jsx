import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen';
import { Suspense } from 'react';
import { Layout } from './components/Layout.server';

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <Layout>
            <FileRoutes />
          </Layout>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
