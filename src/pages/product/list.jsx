import { Helmet } from 'react-helmet-async';
import { ProductListView } from '../../sections/product/view/index.js';


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
