import { Helmet } from 'react-helmet-async';

import CampaignListView from '../../sections/campaign/view/campaign-list-view.jsx';

// ----------------------------------------------------------------------

export default function CampaignsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Campaigns</title>
      </Helmet>

      <CampaignListView />
    </>
  );
}
