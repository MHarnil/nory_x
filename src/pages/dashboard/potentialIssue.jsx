import { Helmet } from 'react-helmet-async';

import PotentialIssueListView from '../../sections/potentialissue/view/potentialIssue-list-view.jsx';

// ----------------------------------------------------------------------

export default function PotentialIssuePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Business Insights</title>
      </Helmet>

      <PotentialIssueListView />
    </>
  );
}
