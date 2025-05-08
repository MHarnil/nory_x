import { Helmet } from 'react-helmet-async';

import MediasSeoListView from '../../sections/mediasSEO/view/mediasSeo-list-view.jsx';

// ----------------------------------------------------------------------

export default function MediasSeoPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Media SEO</title>
      </Helmet>

      <MediasSeoListView />
    </>
  );
}
