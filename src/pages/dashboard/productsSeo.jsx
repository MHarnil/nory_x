import { Helmet } from 'react-helmet-async';

import ProductSeoListView from '../../sections/productsSEO/view/productSeo-list-view.jsx';

// ----------------------------------------------------------------------

export default function ProductSeoPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Product SEO</title>
      </Helmet>

      <ProductSeoListView />
    </>
  );
}
