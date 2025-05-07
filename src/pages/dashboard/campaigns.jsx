import { Helmet } from 'react-helmet-async';

import { CampaignsCardsView } from '../../sections/campaigns/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog Content</title>
      </Helmet>

      <CampaignsCardsView />
    </>
  );
}
