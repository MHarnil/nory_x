import { Helmet } from 'react-helmet-async';
import { ProductListView } from '../../../sections/products/view/index.js';


// ----------------------------------------------------------------------

export default function ProductListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Product List</title>
      </Helmet>

      <ProductListView />
    </>
  );
}
