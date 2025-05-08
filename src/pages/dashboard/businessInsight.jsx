import { Helmet } from 'react-helmet-async';

import BusinessInsightListView from '../../sections/businessInsight/view/businessInsight-list-view.jsx';

// ----------------------------------------------------------------------

export default function BusinessInsightsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Business Insights</title>
      </Helmet>

      <BusinessInsightListView />
    </>
  );
}
