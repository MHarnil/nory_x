import { Helmet } from 'react-helmet-async';

import { BusinessInsightsCardsView } from '../../sections/businessInsights/view/index.js';
import BlogContentCardsView from '../../sections/blogContent/view/blogContent-cards-view.jsx';
import HomeCardsView from '../../sections/home/view/home-cards-view.jsx';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Home</title>
      </Helmet>

      <HomeCardsView />
    </>
  );
}
