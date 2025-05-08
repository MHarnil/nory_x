import { Helmet } from 'react-helmet-async';

import ProductsListView from '../../sections/products/view/products-list-view.jsx';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Products</title>
      </Helmet>

      <ProductsListView />
    </>
  );
}
