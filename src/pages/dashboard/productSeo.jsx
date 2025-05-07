import { Helmet } from 'react-helmet-async';

import ProductSeoCardsView from '../../sections/productSEO/view/productSeo-cards-view.jsx';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Product SEO</title>
      </Helmet>

      <ProductSeoCardsView />
    </>
  );
}
