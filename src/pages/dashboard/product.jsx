import { Helmet } from 'react-helmet-async';

import { ProductListView } from '../../sections/product/view/index.js';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Products</title>
      </Helmet>

      <ProductListView />
    </>
  );
}
