import { Helmet } from 'react-helmet-async';

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
