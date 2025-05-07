import { Helmet } from 'react-helmet-async';

import { ProductsCardsView } from '../../sections/products/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Products</title>
      </Helmet>

      <ProductsCardsView />
    </>
  );
}
