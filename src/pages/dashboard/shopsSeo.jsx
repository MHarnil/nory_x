import { Helmet } from 'react-helmet-async';

import ShopsSeoListView from '../../sections/shopsSEO/view/shopsSeo-list-view.jsx';

// ----------------------------------------------------------------------

export default function ShopsSeoPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Shop SEO</title>
      </Helmet>

      <ShopsSeoListView />
    </>
  );
}
