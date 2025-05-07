import { Helmet } from 'react-helmet-async';

import ShopSeoCardsView from '../../sections/shopSEO/view/shopSeo-cards-view.jsx';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Shop SEO</title>
      </Helmet>

      <ShopSeoCardsView />
    </>
  );
}
