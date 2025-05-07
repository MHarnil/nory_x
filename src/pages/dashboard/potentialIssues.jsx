import { Helmet } from 'react-helmet-async';

import { PotentialIssuesCardsView } from '../../sections/potentialIssues/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Business Insights</title>
      </Helmet>

      <PotentialIssuesCardsView />
    </>
  );
}
