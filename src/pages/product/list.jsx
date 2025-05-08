import { Helmet } from 'react-helmet-async';

import { ProductListView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title> Product: Shop</title>
      </Helmet>

      <ProductListView />
    </>
  );
}
