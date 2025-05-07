import { Helmet } from 'react-helmet-async';

import { BusinessInfoCardsView } from 'src/sections/businessInfo/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Business Info</title>
      </Helmet>

      <BusinessInfoCardsView />
    </>
  );
}
