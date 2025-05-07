import { Helmet } from 'react-helmet-async';

import { BusinessInsightsCardsView } from '../../sections/businessInsights/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Business Insights</title>
      </Helmet>

      <BusinessInsightsCardsView />
    </>
  );
}
