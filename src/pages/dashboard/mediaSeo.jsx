import { Helmet } from 'react-helmet-async';

import MediaSeoCardsView from '../../sections/mediaSEO/view/mediaSeo-cards-view.jsx';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Media SEO</title>
      </Helmet>

      <MediaSeoCardsView />
    </>
  );
}
